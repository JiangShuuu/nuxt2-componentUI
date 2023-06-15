<template>
  <div>
    <t-table class="mt-[30px] mb-[60px]" :headers="fields" :data="sortedItems">
      <!-- Custom Header -->
      <template slot="thead" slot-scope="props">
        <thead>
          <tr>
            <th :class="props.thClass" class="flex">
              <label class="mr-1 common-checkbox"
                ><input
                  v-model="selectAll"
                  type="checkbox"
                  @change="toggleSelectAll"
                />
                <span class="checkbox"></span>
              </label>
              {{ props.data[0].text }}
            </th>
            <th :class="props.thClass" @click="sortTable('ids')">
              <div class="flex items-center cursor-pointer">
                <p>{{ props.data[1].text }}</p>
                <!-- <img v-if="sortKey === 'ids' && sortOrder === -1" src="../assets/img/sort-down.svg" class="w-5 h-5" />
                <img v-else src="../assets/img/sort-up.svg" class="w-5 h-5" /> -->
              </div>
            </th>
            <th :class="props.thClass" @click="sortTable('jobnum')">
              <div class="flex items-center cursor-pointer">
                <p>{{ props.data[2].text }}</p>
                <!-- <img v-if="sortKey === 'jobnum' && sortOrder === -1" src="../assets/img/sort-down.svg" class="w-5 h-5" />
                <img v-else src="../assets/img/sort-up.svg" class="w-5 h-5" /> -->
              </div>
            </th>
            <th :class="props.thClass">
              {{ props.data[3].text }}
            </th>
            <th :class="props.thClass">
              {{ props.data[4].text }}
            </th>
            <th :class="props.thClass" @click="sortTable('area')">
              <div class="flex items-center cursor-pointer">
                <p>{{ props.data[5].text }}</p>
                <!-- <img v-if="sortKey === 'area' && sortOrder === -1" src="../assets/img/sort-down.svg" class="w-5 h-5" />
                <img v-else src="../assets/img/sort-up.svg" class="w-5 h-5" /> -->
              </div>
            </th>
          </tr>
        </thead>
      </template>
      <!-- Custom Item -->
      <template slot="row" slot-scope="props">
        <tr class="hover:bg-primary-extralight">
          <td class="px-4 py-6">
            <label class="common-checkbox"
              ><input
                v-model="selectedItems"
                :value="props.row.ids"
                type="checkbox"
                @change="toggleSelect"
              />
              <span class="checkbox"></span>
              <span class="checkbox-text"></span>
            </label>
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
</template>

<script>
import orderBy from 'lodash/orderBy'

export default {
  name: 'TablePage',
  props: {
    fields: {
      type: Array,
      required: true,
    },
    lists: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      sortKey: null,
      sortOrder: 1,
      selectedItems: [],
      selectAll: false,
    }
  },
  computed: {
    sortedItems() {
      if (this.sortKey) {
        return orderBy(this.lists, [item => Number(item[this.sortKey])], [this.sortOrder === 1 ? 'asc' : 'desc'])
      }
      return this.lists
    },
  },
  methods: {
    sortTable(key) {
      if (this.sortKey !== key) this.sortKey = key
      this.sortOrder *= -1
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
