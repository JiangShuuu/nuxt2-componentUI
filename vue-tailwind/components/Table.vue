<template>
  <div>
    <table>
      <thead>
        <tr>
          <th @click="sortTable('name')">Name</th>
          <th @click="sortTable('age')">Age</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in sortedItems" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import orderBy from 'lodash/orderBy'

export default {
  name: 'TablePage',
  data() {
    return {
      items: [
        { id: 1, name: 'John', age: 25 },
        { id: 2, name: 'Alice', age: 30 },
        { id: 3, name: 'Bob', age: 20 },
      ],
      sortKey: null,
      sortOrder: 1,
    }
  },
  computed: {
    sortedItems() {
      if (this.sortKey) {
        return orderBy(this.items, this.sortKey, this.sortOrder === 1 ? 'asc' : 'desc');
      }
      return this.items;
    }
  },
  methods: {
    sortTable(key) {
      if (this.sortKey === key) {
        this.sortOrder *= -1;
      } else {
        this.sortKey = key;
        this.sortOrder = 1;
      }
    }
  }
}
</script>
