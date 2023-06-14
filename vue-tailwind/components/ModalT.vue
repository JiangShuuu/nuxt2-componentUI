
<template>
  <transition name="slide-fade">
    <TModal name="test-modal">
      <div class="border p-5 rounded bg-white">getHIHIHI</div>
    </TModal>
  </transition>
</template>

<style>
/* based on https://vuejs.org/v2/guide/transitions.html#CSS-Transitions
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8*/  {
  transform: translateY(-10px);
  opacity: 0;
}
</style>