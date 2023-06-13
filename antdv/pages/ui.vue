<template>
  <div>
    <div class="flex items-center justify-center w-full h-screen space-x-2">
      <button class="w-20 btn btn_primary">Popover</button>
      <button class="w-20 btn btn_primary" @click="open">Modal</button>
      <button class="w-20 btn btn_primary">Toast</button>
      <a-tooltip placement="top">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <button class="w-20 btn btn_primary">Tooltip</button>
      </a-tooltip>
    </div>
    <ModalJobSort ref="modal" />
  </div>
</template>

<script>
// https://1x.antdv.com/components/modal-cn
export default {
  name: 'ComponentUI',
  methods: {
    open() {
      this.$refs.modal.showModal()
    }
  }
}
</script>
