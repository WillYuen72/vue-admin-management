<template>
  <el-card>
    <div slot="header" class="clearfix" style="text-align: left;">
      <h1>Paged Table</h1>
    </div>
    <div style="margin-top: 20px;">
      <paged-table :data="data" :columns="columns" :paginationAttrs="paginationAttrs" showActionColumn @size-change="sizeChange">
        <template v-slot:action-column="{ data }">
          <el-button @click="view(data.$index, data.row)">View</el-button>
        </template>
      </paged-table>
    </div>
  </el-card>
</template>

<script>
import PagedTable from '../../../components/table/PagedTable'

export default {
  name: 'demo-paged-table',
  components: {
    [PagedTable.name]: PagedTable
  },
  data () {
    return {
      data: [
        { id: 1, name: 'test 1' },
        { id: 2, name: 'test 2' },
        { id: 3, name: 'test 3' },
        { id: 4, name: 'test 1' },
        { id: 5, name: 'test 2' },
        { id: 6, name: 'test 3' },
        { id: 7, name: 'test 1' },
        { id: 8, name: 'test 2' },
        { id: 9, name: 'test 3' },
        { id: 10, name: 'test 1' },
        { id: 11, name: 'test 2' },
        { id: 12, name: 'test 3' },
        { id: 13, name: 'test 1' },
        { id: 14, name: 'test 2' },
        { id: 15, name: 'test 3' },
        { id: 16, name: 'test 1' },
        { id: 17, name: 'test 2' },
        { id: 18, name: 'test 3' }
      ],
      columns: [
        { prop: 'id', label: 'ID', attrs: { width: 100 } },
        { prop: 'name', label: 'Name' }
      ],
      paginationAttrs: {
        'hide-on-single-page': false
      }
    }
  },
  methods: {
    view (index, row) {
      console.log(index, row)
    },
    sizeChange (data) {
      console.log(data)
    }
  }
}
</script>

<style scoped>

</style>
