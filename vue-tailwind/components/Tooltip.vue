<template>
  <div class="inline-block">
    <div
      ref="referenceRef"
      class="inline-block"
      @mouseenter="show"
      @mouseleave="hide"
      @focus="show"
      @blur="hide"
    >
      <slot></slot>
    </div>
    <div
      ref="floatingRef"
      :class="[
        isHidden && 'hidden',
        'tooltip-content',
        isOpacity && 'opacity-0',
      ]"
    >
      {{ content }}
      <div ref="arrowRef" class="absolute w-2 h-2 rotate-45 bg-gray-900"></div>
    </div>
  </div>
</template>

<script>
import { computePosition, flip, offset, shift, arrow } from '@floating-ui/dom'
export default {
  name: 'ToolTip',
  props: {
    content: {
      type: String,
      default: '',
    },
    placement: {
      type: String,
      default: 'bottom',
    },
  },
  data() {
    return {
      isHidden: true,
      isOpacity: true,
    }
  },
  methods: {
    async calculatePosition() {
      const refer = this.$refs.referenceRef
      const floating = this.$refs.floatingRef
      const arrowRef = this.$refs.arrowRef

      const { x, y, middlewareData, placement } = await computePosition(
        refer,
        floating,
        {
          placement: this.placement,
          middleware: [
            offset(8),
            flip(),
            shift({ padding: 5 }),
            arrow({ element: arrowRef }),
          ],
        }
      )

      Object.assign(floating.style, {
        left: `${x}px`,
        top: `${y}px`,
      })

      const opposedSide = {
        right: 'left',
        left: 'right',
        bottom: 'top',
        top: 'bottom',
      }[placement.split('-')[0]]

      // arrow
      const { x: arrowX, y: arrowY } = middlewareData.arrow

      Object.assign(arrowRef.style, {
        left: arrowX ? `${arrowX}px` : '',
        top: arrowY ? `${arrowY}px` : '',
        bottom: '',
        right: '',
        [opposedSide]: '-4px',
      })

      // console.log('get', middlewareData, placement)
    },
    // ani 待解
    hide() {
      clearTimeout(this.timer)
      this.isOpacity = true
      this.timer = setTimeout(() => {
        this.isHidden = true
      }, 300)
    },
    show() {
      this.isHidden = false
      this.isOpacity = false
      this.calculatePosition()
    },
  },
}
</script>

<style lang="postcss" scoped>
.tooltip-content {
  transition: opacity 0.3s;
  @apply absolute bg-gray-900 text-sm text-white px-3 py-1.5 rounded-md cursor-default;
}
</style>
