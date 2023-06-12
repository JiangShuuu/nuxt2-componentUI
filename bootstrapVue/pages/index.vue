<template>
  <div>
    <div>
      <!-- <b-button >Launch demo modal</b-button> -->
      <div v-b-modal.modal-1 class="btn-primary">BTN</div>

      <b-modal id="modal-1" title="BootstrapVue">
        <p class="my-4">Hello from modal!</p>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
