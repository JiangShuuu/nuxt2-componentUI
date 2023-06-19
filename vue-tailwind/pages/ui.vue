<template>
  <div class="flex items-center justify-center w-full h-screen space-x-2">
    <button class="w-20 btn btn_primary">Popover</button>
    <button class="w-20 btn btn_primary" @click="openModal">
      Modal
    </button>
    <button class="w-20 btn btn_primary" @click="$toast('CustomToast01!!')">Toast</button>
    <button v-tooltip="'tooltip!'" class="w-20 btn btn_primary">Tooltip</button>
    <Pop content="This is Tooltip02!!">
      <button class="w-20 btn btn_primary">Tooltip02</button>
    </Pop>
    <!-- <Popover position="top" trigger="click">
      <template slot="content">
        <div>鼠标点击弹出，再次点击别处消失</div>
      </template>
      <div>BTN</div>
    </Popover> -->

     <!-- <t-popover>
        <template slot="content">
            <div>鼠标点击弹出，再次点击别处消失</div>
        </template>
        <t-button>钮</t-button>
    </t-popover> -->
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
