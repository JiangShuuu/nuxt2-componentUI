<template>
    <section>
        <div class="buttons">
            <!-- <b-button
                label="Launch card modal (keep scroll)"
                type="is-primary"
                size="is-medium"
                @click="isCardModalActive = true" /> -->
                <div class="border" @click="open">BTN</div>
        </div>
        <div class="border" data-target="modal-js-example">
            btn-2
        </div>

        <b-modal id="modal-js-example" :width="640" scroll="keep">
            <div class="border bg-white">
                <p class="text-4xl">dsadsada</p>
            </div>
        </b-modal>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                isImageModalActive: false,
                isCardModalActive: false
            }
        },
        methods: {
            open() {
                this.$buefy.modal.open('modaldsadsaa')
            }
        }
    }
</script>