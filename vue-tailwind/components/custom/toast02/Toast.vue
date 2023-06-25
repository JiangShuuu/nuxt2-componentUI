<template>
  <div
    v-if="showWrap"
    class="toast-content"
    :class="[showContent ? 'fadein' : 'fadeout']"
    :style="positionStyle"
  >
    {{ content }}
    {{ verticalOffset }}
  </div>
</template>

<script>
export default {
  name: 'ToastUI',
  props: {
    type: { type: String, default: 'info' },
    content: { type: String, required: true },
    duration: { type: Number, default: 2500 },
    position: { type: String, default: 'top-right' },
    autoClose: { type: Boolean, default: true },
    showClose: { type: Boolean, default: true },
  },
  data() {
    return {
      closed: false,
      timer: null,
      verticalOffset: 16,
      showContent: true,
      showWrap: true,
    }
  },
  computed: {
    positionStyle() {
      return {
        top: `${this.verticalOffset}px`,
      }
    },
  },
  watch: {
    showWrap(newVal) {
      if (newVal) {
        console.log('gggggg')
        // this.visible = false
        this.$el.addEventListener('transitionend', this.destroyElement)
        this.$emit('toastClose')
      }
    },
  },
  mounted() {
    // 挂载Toast在页面中
    document.body.appendChild(this.$el)
    // 需要自动关闭时，调用startTimer
    if (this.autoClose) this.startTimer()
  },
  beforeDestroy() {
    this.stopTimer()
    this.$el.removeEventListener('transitionend', this.destroyElement)
  },
  destroyed() {
    // 注销
    this.$el.parentNode.removeChild(this.$el)
  },
  methods: {
    startTimer() {
      console.log('ge3t')
      if (this.duration > 0) {
        console.log('getSettimottt', this.duration)
        this.timer = setTimeout(() => {
          this.showContent = false
        }, this.duration)

        this.timer02 = setTimeout(() => {
          this.showWrap = false
          // 觸發更新機制
          this.$emit('toastClose')
        }, this.duration + 1250)
      }
    },
    stopTimer() {
      if (this.timer) clearTimeout(this.timer)
      if (this.timer02) clearTimeout(this.timer02)
    },
    destroyElement() {
      this.$destroy()
    },
  },
}
</script>

<style lang="postcss" scoped>
.toast-content {
  @apply fixed flex items-center justify-center bg-[#292929] rounded left-1/2 -translate-x-1/2 text-white;
  width: 348px;
  height: 88px;
  top: 9px;
}
.fadein {
  animation: animate_in 0.25s;
}
.fadeout {
  animation: animate_out 0.25s;
  opacity: 0;
}
@keyframes animate_in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes animate_out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
