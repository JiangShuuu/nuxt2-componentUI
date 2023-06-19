<template>
    <div v-if="showWrap" class="wrap" :class="showContent ?'fadein':'fadeout'">
      {{text}}
    </div>
</template>

<script>
export default {
  name: 'ToastPage',
}
</script>

<style scoped>
  .wrap{
    position: fixed;
    width: 348px;
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: center;
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
