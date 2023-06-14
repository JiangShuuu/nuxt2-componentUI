<template>
  <div class="flex items-center justify-between border-4 height">
    <client-only>
      <transition name="slide-fade">
        <!-- <t-alert :show="show"> My Alert </t-alert> -->
        <ModalT :show="show" />
      </transition>
    </client-only>
    <div class="border" @click="$modal.show('donate-modal')">test</div>
    <button
      @click="$modal.show('donate-modal')">
      Toggle alert
    </button>
    <!-- <button @click="show = !show">
      Toggle alertss
    </button> -->
    <div class="border">
      fsadsa
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      show: false
    }
  }
}
</script>

<style>
.height {
  height: 1000px;
}
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
