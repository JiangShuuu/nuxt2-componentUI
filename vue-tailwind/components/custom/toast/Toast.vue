<template>
    <div v-if="showWrap" class="toast-content" :class="showContent ?'fadein':'fadeout'">
      {{text}}
    </div>
</template>

<script>
export default {
  name: 'ToastUI',
}
</script>

<style lang="postcss" scoped>
  .toast-content{
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
    100%{
      opacity: 1;
    }
  }
  @keyframes animate_out {
    0% {
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
  }
</style>
