<template>
  <div class="flex items-center justify-center w-full h-screen space-x-2">
    <button id="popover-del" class="w-20 btn btn_primary">Popover</button>
    <PopoverDel />
    <button v-b-modal="`manage-modal`" class="w-20 btn btn_primary">Modal</button>
    <ModalJobSort />
  </div>
</template>

<script>
export default {
  name: 'PopoverPage',
}
</script>
