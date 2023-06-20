<template>
  <div class="flex items-center justify-center w-full h-screen space-x-2">
    <!-- Popover floating -->
    <Popover placement="right">
      <button class="w-20 btn btn_primary">Popover</button>
    </Popover>
    <!-- Modal -->
    <button class="w-20 btn btn_primary" @click="openModal">Modal</button>
    <!-- Toast -->
    <button class="w-20 btn btn_primary" @click="$toast('CustomToast01!!')">
      Toast
    </button>
    <!-- Tooltip Custom -->
    <button v-tooltip="'tooltip!'" class="w-20 btn btn_primary">Tooltip</button>
    <!-- Tooltip floating -->
    <Tooltip content="This is Tooltip02!!" placement="top">
      <button class="w-20 btn btn_primary">Tooltip02</button>
    </Tooltip>
  </div>
</template>

<script>
export default {
  name: 'ComponentUI',
  methods: {
    openModal() {
      this.$modal.show('test-modal', {id: 123})
    },
    openToast() {
      this.$refs.toast.open()
    },
  },
}
</script>
