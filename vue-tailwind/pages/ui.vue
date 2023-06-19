<template>
  <div class="flex items-center justify-center w-full h-screen space-x-2">
    <button class="w-20 btn btn_primary">Popover</button>
    <button class="w-20 btn btn_primary" @click="openModal">
      Modal
    </button>
    <button class="w-20 btn btn_primary" @click="$toast('CustomToast01!!')">Toast</button>
    <!-- <button class="w-20 btn btn_primary" @click="openToast">Toast</button> -->
    <button class="w-20 btn btn_primary">Tooltip</button>
    <ToastT ref="toast" :duration="2000">
      <div class="w-[348px] h-[88px] flex items-center justify-center">
        CustomToast02!!
      </div>
    </ToastT>
  </div>
</template>

<script>
export default {
  name: 'ComponentUI',
  methods: {
    openModal() {
        this.$modal.show('test-modal')
    },
    openToast() {
      this.$refs.toast.open()
    }
  },
}
</script>
