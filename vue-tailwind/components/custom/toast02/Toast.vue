<template>
  <Transition name="fade">
    <div v-if="show" class="toast-content" :style="positionStyle">
      {{ content + verticalOffset }}
    </div>
  </Transition>
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
      show: false,
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
    show(newValue) {
      if (!newValue) {
        this.$el.addEventListener('transitionend', this.destroyElement)
      }
    },
    closed(newVal) {
      if (newVal) {
        this.show = false
        this.$el.addEventListener('transitionend', this.destroyElement)
        this.$emit('toastClose')
      }
    },
  },
  mounted() {
    // 掛载Toast在頁面中
    document.body.appendChild(this.$el)
    // if (this.autoClose) this.startTimer()
    this.startTimer()
  },
  beforeDestroy() {
    console.log('beforeDestroy')
    this.stopTimer()
  },
  destroyed() {
    console.log('---------destroy---------')
    this.$el.parentNode.removeChild(this.$el)
  },
  methods: {
    startTimer() {
      // 開啟Toast
      if (this.duration > 0) {
        this.show = true
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.closed = true
          }
        }, this.duration)
      }
    },
    stopTimer() {
      if (this.timer) clearTimeout(this.timer)
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave {
  opacity: 0;
}

/* .fade-leave-to {
  opacity: 0;
} */

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
