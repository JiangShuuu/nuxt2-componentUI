<template>
  <div ref="popover" class="popover">
    <div
      v-if="visible"
      ref="contentWrapper"
      class="content-wrapper"
      :class="{ [`position-${position}`]: true }"
    >
      <slot name="content" :close="close"></slot>
    </div>
    <!-- span标签增加display: inline-block; 解决包裹元素高度一致的问题 -->
    <span ref="triggerWrapper" style="display: inline-block">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: 'PopoverPage',
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'left', 'right'].includes(value)
      },
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value) {
        return ['click', 'hover', 'focus'].includes(value)
      },
    },
  },
  data() {
    return {
      visible: false,
    }
  },
  mounted() {
    const popover = this.$refs.popover
    if (this.trigger === 'click') {
      popover.addEventListener('click', this.onClick)
    } else if (this.trigger === 'hover') {
      popover.addEventListener('mouseenter', this.open) // 添加hover监听事件
      popover.addEventListener('mouseleave', this.close) // 取消hover监听事件
    } else {
      popover.addEventListener('mousedown', this.open) // 添加hover监听事件
      popover.addEventListener('mouseup', this.close) // 取消hover监听事件
    }
  },

  destroyed() {
    // 页面销毁的时候去掉监听
    const popover = this.$refs.popover
    if (this.trigger === 'click') {
      popover.removeEventListener('click', this.open())
    } else if (this.trigger === 'hover') {
      popover.removeEventListener('mouseenter', this.open) // 添加hover监听事件
      popover.removeEventListener('mouseleave', this.close) // 取消hover监听事件
    } else {
      popover.removeEventListener('mousedown', this.open())
      popover.removeEventListener('mouseup', this.close())
    }
  },
  methods: {
    positionContent() {
      document.body.appendChild(this.$refs.contentWrapper)
      const { contentWrapper, triggerWrapper } = this.$refs
      const { width, height, top, left } = triggerWrapper.getBoundingClientRect()
      if (this.position === 'top') {
        contentWrapper.style.left = left + window.scrollX + 'px'
        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
      } else if (this.position === 'bottom') {
        contentWrapper.style.left = left + window.scrollX + 'px'
        contentWrapper.style.top = top + height + window.scrollY + 'px'
      } else if (this.position === 'left') {
        contentWrapper.style.left = left + window.scrollX + 'px'
        contentWrapper.style.top = top + window.scrollY + 'px'
      } else if (this.position === 'right') {
        contentWrapper.style.left = left + width + window.scrollX + 'px'
        contentWrapper.style.top = top + window.scrollY + 'px'
      }
    },
    onClickDocument(e) {
      // 如果点击在popover 则让popover自己去处理，document不管
      if (
        this.$refs.contentWrapper &&
        this.$refs.contentWrapper.contains(e.target)
      ) {
        return
      }
      this.close()
    },
    open() {
      this.visible = true
      setTimeout(() => {
        this.positionContent()
        document.addEventListener('click', this.onClickDocument)
      })
    },
    close() {
      this.visible = false
      document.removeEventListener('click', this.onClickDocument)
    },
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        // 找到点击事件的元素
        if (this.visible) {
          this.close()
        } else {
          this.open()
        }
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.dialog {
  background: #fff;
  position: absolute;
  width: 80px;
  z-index: 100;
  border: 1px solid #ebeef5;
  box-shadow: 1px 1px 2px 0px rgba(192, 196, 204, 1),
    -1px -1px 2px 0px rgba(192, 196, 204, 1);
  &-arrow {
    width: 0;
    height: 0;
    border: 14px solid transparent;
    border-right-color: rgba(192, 196, 204, 0.7);
    position: relative;
    top: 25px;
    left: -29px;
  }
  &-insideArrow {
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-right-color: #fff;
    position: relative;
    top: -1px;
    left: -24px;
  }
}
</style>
