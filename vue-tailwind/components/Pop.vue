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
        'absolute bg-gray-900 text-sm text-white px-3 py-1.5 rounded-md cursor-default',
      ]"
    >
      {{content}}
      <div ref="arrowRef" class="absolute w-2 h-2 rotate-45 bg-gray-900"></div>
    </div>
  </div>
</template>

<script>
import { computePosition, flip, offset, shift, arrow } from '@floating-ui/dom'
export default {
  name: 'PopOver',
  props: {
    content: {
      type: String,
      default: ""
    },
    placement: {
      type: String,
      default: 'bottom'
    }
  },
  data() {
    return {
      isHidden: true,
    }
  },
  async mounted() {},
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
    hide() {
      this.isHidden = true
    },
    show() {
      this.isHidden = false
      this.calculatePosition()
    },
  },
}
</script>
