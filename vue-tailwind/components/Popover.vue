<template>
  <div class="inline-block" tabindex="1"  @blur="hide">
    <div ref="referenceRef" class="inline-block" @click="show" >
      <slot></slot>
    </div>
    <div
      ref="floatingRef"
      :class="[
        isHidden && 'hidden',
        'popover-content',
        isOpacity && 'opacity-0',
      ]"
    >
      <div class="p-5 popover-box">
        <div class="flex justify-end">
          <div class="w-4 h-4 cursor-pointer text-gray" @click="hide">X</div>
        </div>
        <div class="w-[400px] mt-4">
          <div class="text-lg font-bold text-center">確定要刪除嗎？</div>
          <div class="flex mt-6 justify-evenly">
            <button class="w-[137px] btn btn_primary" @click="hide">
              確定
            </button>
            <button class="w-[137px] btn btn_secondary" @click="hide">
              取消
            </button>
          </div>
        </div>
      </div>
      <div
        ref="arrowRef"
        class="absolute w-3 h-3 rotate-45 bg-white popover-arrow"
      ></div>
    </div>
  </div>
</template>

<script>
import { computePosition, flip, offset, shift, arrow, autoUpdate } from '@floating-ui/dom'

export default {
  name: 'PopoverPage',
  props: {
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
    calculatePosition() {
      const refer = this.$refs.referenceRef
      const floating = this.$refs.floatingRef
      const arrowRef = this.$refs.arrowRef

      // const { x, y, middlewareData, placement } = await computePosition(
      //   refer,
      //   floating,
      //   {
      //     placement: this.placement,
      //     middleware: [
      //       offset(10),
      //       flip(),
      //       shift({ padding: 10 }),
      //       arrow({ element: arrowRef }),
      //     ],
      //   }
      // )

      autoUpdate(refer, floating, ()=> {
        computePosition(
          refer,
          floating,
          {
            placement: this.placement,
            middleware: [
              offset(10),
              flip(),
              shift({ padding: 10 }),
              arrow({ element: arrowRef }),
            ],
          }
        ).then(({x, y, middlewareData, placement}) => {
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
            [opposedSide]: '-6px',
          })
        })
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
.popover-content {
  transition: opacity 0.3s;
  z-index: 99999;
  @apply absolute bg-white;
}
.popover-box {
  @apply rounded-md;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}
</style>
