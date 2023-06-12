<template>
  <b-modal
    id="manage-modal"
    :centered="true"
    :hide-header="true"
    class="modal-dialog"
    :hide-footer="true"
  >
    <div class="jobsort">
      <div class="flex justify-end">
        <div class="text-2xl cursor-pointer text-gray" @click="onModalClose">X</div>
      </div>

      <p class="title">公司職缺篩選</p>

      <div class="header">
        <div class="header_content">
          <div class="lists">
            <p>統編</p>
            <span>88569854</span>
          </div>
          <div class="lists">
            <p>公司名稱</p>
            <span>大魯閣湳雅廣場</span>
          </div>
          <div class="lists">
            <p>職缺總數</p>
            <span>23</span>
          </div>
        </div>
        <button class="btn btn_primary" @click="onModalClose">儲存</button>
      </div>

      <div class="sub_title_box">
        <p class="sub_title">參與活動職缺</p>
        <p class="text">共 <span class="text-num">5600</span> 家公司</p>
      </div>

      <!-- table -->
      <div class="sort_table">
        <b-table class="table" hover :items="lists" :fields="fields" responsive>
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
  name: 'ModalsCompanyJobSort',
  data() {
    return {
      lists: fakeData,
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
        },
        {
          key: 'jobnum',
          label: '職缺編號',
          thStyle: { width: '10%' },
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

<style lang="postcss" scoped>
.jobsort {
  margin: 24px 24px 24px 48px;
  .header {
    @apply border-gray-200 border-t border-b bg-yellow;
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    .header_content {
      .lists {
        display: flex;
        margin-bottom: 16px;
        font-weight: 700;
        p {
          width: 15%;
        }
        span {
          flex: 1;
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
      flex: 1;
    }
    button {
      width: 154px;
      margin: 0 24px;
    }
  }
  .title {
    font-size: 24px;
    font-weight: 700;
  }
  .sub_title_box {
    margin-top: 36px;
    display: flex;
    align-items: center;
    .sub_title {
      font-size: 24px;
      font-weight: 700;
      margin-right: 16px;
    }
    .text {
      @apply text-gray;
    }
    .text-num {
      @apply text-primary;
    }
  }
  .sort_table {
    margin: 30px 0 60px 0;
  }
}
</style>
