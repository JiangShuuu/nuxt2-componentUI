<template>
  <div class="flex items-center justify-center w-full h-screen space-x-2">
    <button id="popover-del" class="w-20 btn btn_primary">Popover</button>
    <PopoverDel />
    <button v-b-modal="`manage-modal`" class="w-20 btn btn_primary">Modal</button>
    <ModalJobSort />
    <button class="w-20 btn btn_primary" @click="showToast">Toast</button>
    <button v-b-tooltip.hover="'Tooltip!'" class="w-20 btn btn_primary">Tooltip</button>
  </div>
</template>

<script>
export default {
  name: 'ComponentUI',
  methods: {
    showToast() {
      this.$root.$bvToast.toast('BootstrapToast!!', {
        noCloseButton: true,
        toaster: 'b-toaster-top-center',
        bodyClass: 'custom-toaster',
        autoHideDelay: 2000,
    })
    }
  }
}
</script>
