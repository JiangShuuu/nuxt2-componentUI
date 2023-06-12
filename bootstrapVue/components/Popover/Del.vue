<template>
    <b-popover target="popover-del" triggers="focus" placement="auto">
        <div class="popover_del">
            <div class="flex justify-end">
                <svg-icon
                    name="delete"
                    class="w-4 h-4 text-gray pointer"
                    @click="onPopoverClose"
                />
            </div>
            <div class="w-[400px] mt-4">
                <div class="text-lg font-bold text-center">
                    確定要刪除嗎？
                </div>
                <div class="flex mt-6 justify-evenly">
                    <button class="w-[137px] btn_primary" @click="$emit('on-popover-del')">
                        確定
                    </button>
                    <button class="w-[137px] btn_secondary" @click="onPopoverClose">
                        取消
                    </button>
                </div>
            </div>
        </div>
    </b-popover>
</template>

<script>
export default {
    name: 'ModalsPopoverDel',
    methods: {
        onPopoverClose() {
            this.$root.$emit('bv::hide::popover', 'popover-del')
        },
    },
}
</script>

<style lang="postcss" scoped>
</style>
