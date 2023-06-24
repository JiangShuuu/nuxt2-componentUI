<template>
  <div
    v-if="showClose"
    class="toast-content"
    :class="showContent ? 'fadein' : 'fadeout'"
  >
    {{ content }}
  </div>
</template>

<script>
export default {
  name: 'ToastUI',
  props: {
    type: { type: String, default: "info" },
    content: { type: String, required: true },
    duration: { type: Number, default: 2500 },
    position: { type: String, default: "top-right" },
    autoClose: { type: Boolean, default: true },
    showClose: { type: Boolean, default: true },
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
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close()
          }
        }, this.duration)
      }
    },
    stopTimer() {
      if (this.timer) clearTimeout(this.timer)
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
