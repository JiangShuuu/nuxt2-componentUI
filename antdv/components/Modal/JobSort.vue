<template>
  <div>
    <a-modal
      :visible="visible"
      :confirm-loading="confirmLoading"
      :footer="null"
      :mask-closable="false"
      :closable="false"
      :width="1198"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <div class="m-6 ml-12">
        <div class="flex justify-end">
          <div class="text-2xl cursor-pointer text-gray" @click="handleCancel">
            X
          </div>
        </div>
        <p class="text-2xl font-bold">公司職缺篩選</p>
        <div
          class="flex items-center justify-between p-6 mt-4 border-t border-b border-gray-200 bg-yellow"
        >
          <div class="flex-1 header_content">
            <div class="flex mb-4 font-bold">
              <p class="w-1/6">統編</p>
              <span>88569854</span>
            </div>
            <div class="flex mb-4 font-bold">
              <p class="w-1/6">公司名稱</p>
              <span>大魯閣湳雅廣場</span>
            </div>
            <div class="flex mb-4 font-bold">
              <p class="w-1/6">職缺總數</p>
              <span>23</span>
            </div>
          </div>
          <button class="w-[154px] btn btn_primary" @click="handleCancel">
            儲存
          </button>
        </div>

        <div class="flex items-center mt-9">
          <p class="mr-4 text-2xl font-bold">參與活動職缺</p>
          <p class="text-gray">
            共 <span class="text-primary">5600</span> 家公司
          </p>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
    }
  },
  methods: {
    showModal() {
      this.visible = true
    },
    handleOk(e) {
      this.ModalText = 'The modal will be closed after two seconds'
      this.confirmLoading = true
      setTimeout(() => {
        this.visible = false
        this.confirmLoading = false
      }, 2000)
    },
    handleCancel(e) {
      console.log('Clicked cancel button')
      this.visible = false
    },
  },
}
</script>
