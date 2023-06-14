<template>
  <transition name="slide-fade">
    <TModal name="test-modal">
      <div class="p-6 bg-white border rounded">
        <p class="mt-8 text-2xl font-bold">公司職缺篩選</p>

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
          <button class="w-[154px] btn btn_primary">儲存</button>
        </div>

        <div class="flex items-center mt-9">
          <p class="mr-4 text-2xl font-bold">參與活動職缺</p>
          <p class="text-gray">
            共 <span class="text-primary">5600</span> 家公司
          </p>
        </div>

        <!-- table -->
        <t-table
          class="mt-[30px] mb-[60px]"
          :headers="fields"
          :data="lists"
        >
          <template slot="row" slot-scope="props">
            <tr
              class="hover:bg-primary-extralight"
            >
              <td class="px-4 py-6">
                <input id="scales" type="checkbox" name="scales" checked>
              </td>
              <td class="px-4 py-6 w-[84px]">
                {{ props.row.ids }}
              </td>
              <td class="px-4 py-6 w-[104px]">
                {{ props.row.jobnum }}
              </td>
              <td class="px-4 py-6 w-[439px]">
                {{ props.row.job }}
              </td>
              <td class="px-4 py-6 w-[209px]">
                {{ props.row.category }}
              </td>
              <td class="px-4 py-6 w-[209px]">
                {{ props.row.area }}
              </td>
            </tr>
          </template>
        </t-table>
      </div>
    </TModal>
  </transition>
</template>

<script>
const generateFakeData = (num) => {
  const data = []
  for (let i = 1; i <= num; i++) {
    const ids = `${i}`
    const jobnum = i * 10
    const job = '【春水堂】正職人員-新竹湳雅店(大魯閣湳雅廣場)'
    const category = '品管／檢驗人員'
    const area = '台中市南屯區'
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
  name: 'ModalT',
  data() {
    return {
      lists: fakeData,
      selectedItems: [],
      selectAll: false,
      fields: [ '全選','序號','職缺編號','職務名稱','職務類別','地區' ],
    }
  },
  mounted() {
    console.log('tt', this.lists)
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

<style>
/* based on https://vuejs.org/v2/guide/transitions.html#CSS-Transitions
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8*/ {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
