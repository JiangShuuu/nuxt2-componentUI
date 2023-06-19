<template>
  <div v-if="showWrap" class="wrap" :class="showContent ? 'fadein' : 'fadeout'">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ToastPage',
  props: {
    duration: {
        type: Number,
        default: 2000,
    }
  },
  data() {
    return {
      showWrap: false,
      showContent: false,
    }
  },
  methods: {
    open() {
        clearTimeout(this.timer)
        clearTimeout(this.timer02)

        this.showWrap = true
        this.showContent = true

        this.timer = setTimeout(() => {this.showContent = false} ,this.duration)
        this.timer02 = setTimeout(() => {this.showWrap = false} ,this.duration + 1250)
    }
  },
}
</script>

<style scoped>
.wrap {
  position: fixed;
  left: 50%;
  top: 9px;
  background: #292929;
  border-radius: 4px;
  transform: translateX(-50%);
  color: #fff;
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
