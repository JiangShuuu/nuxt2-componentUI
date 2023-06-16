<template>
  <b-modal
    id="manage-modal"
    :centered="true"
    :hide-header="true"
    class="modal-dialog"
    :hide-footer="true"
  >
    <div class="m-6">
      <div class="flex justify-end">
        <div class="text-2xl cursor-pointer text-gray" @click="onModalClose">
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
        <button class="w-[154px] btn btn_primary" @click="onModalClose">
          儲存
        </button>
      </div>

      <div class="flex items-center mt-9">
        <p class="mr-4 text-2xl font-bold">參與活動職缺</p>
        <p class="text-gray">
          共 <span class="text-primary">5600</span> 家公司
        </p>
      </div>

      <!-- table -->
      <div class="mt-[30px] mb-[60px]">
        <b-table
          class="table"
          hover
          :items="lists"
          :fields="fields"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          responsive
        >
          <template #head(action)="row">
            <label class="common-checkbox"
              ><input
                v-model="selectAll"
                type="checkbox"
                @change="toggleSelectAll"
              />
              <span class="checkbox"></span>
              <span class="checkbox-text">{{ row.label }}</span>
            </label>
          </template>
          <template #cell(action)="row">
            <!-- 選取 -->
            <label class="common-checkbox"
              ><input
                v-model="selectedItems"
                :value="row.item.ids"
                type="checkbox"
                @change="toggleSelect"
              />
              <span class="checkbox"></span>
              <span class="checkbox-text"></span>
            </label>
          </template>
          <template #cell(name)="row">
            <span class="table_item_name">{{ row.value }}</span>
          </template>
        </b-table>
      </div>
    </div>
  </b-modal>
</template>

<script>
const generateFakeData = (num) => {
  const data = []
  for (let i = 1; i <= num; i++) {
    const ids = `${i}`
    const jobnum = i * 10
    const job = '【春水堂】正職人員-新竹湳雅店(大魯閣湳雅廣場)'
    const category = '品管／檢驗人員'
    const area = `${i}台中市南屯區`
    data.push({
      ids,
      jobnum,
      job,
      category,
      area,
    })
  }
  return data
}

const fakeData = generateFakeData(20)
export default {
  name: 'ModalsCompanyJobSort',
  data() {
    return {
      lists: fakeData,
      sortBy: '',
      sortDesc: false,
      selectedItems: [],
      selectAll: false,
      fields: [
        {
          key: 'action',
          label: '全選',
          thStyle: { width: '10%' },
        },
        {
          key: 'ids',
          label: '序號',
          thStyle: { width: '8%' },
          sortable: true
        },
        {
          key: 'jobnum',
          label: '職缺編號',
          thStyle: { width: '10%' },
          sortable: true
        },
        {
          key: 'job',
          label: '職務名稱',
          thStyle: { width: '42%' },
        },
        {
          key: 'category',
          label: '職務類別',
          thStyle: { width: '20%' },
        },
        {
          key: 'area',
          label: '地區',
          thStyle: { width: '20%' },
          sortable: true
        },
      ],
    }
  },
  methods: {
    onModalClose() {
      this.$root.$emit('bv::hide::modal', 'manage-modal')
    },
    toggleSelectAll() {
      this.selectedItems = this.selectAll
        ? this.lists.map((item) => item.ids)
        : []
    },
    toggleSelect() {
      this.selectedItems.length === this.lists.length
        ? (this.selectAll = true)
        : (this.selectAll = false)
    },
  },
}
</script>

<style lang="postcss" scoped></style>
