<template>
  <el-row>

    <el-row>
      <!-- table -->
      <el-table :data="displayData" v-bind="$attrs" v-on="$listeners">
        <!-- loop columns -->
        <el-table-column v-for="(column, index) in columns"
                        :key="index"
                        :prop="column.prop"
                        :label="column.label"
                        v-bind="column.attrs">
        </el-table-column>

        <!-- action column -->
        <el-table-column v-if="showActionColumn" v-bind="actionColumnAttrs">
          <template slot-scope="scope">
            <slot name='action-column' v-bind:data="scope"></slot>
          </template>
        </el-table-column>
      </el-table>
    </el-row>

    <el-row>
      <!-- pagination -->
      <el-pagination v-bind="paginationAttrs"
                    :total="total"
                    :page-size="currentPageSize"
                    :page-sizes="paginationPageSizes"
                    :layout="paginationLayout"
                    @size-change="sizeChange"
                    @current-change="currentChange"
                    @prev-click="prevClick"
                    @next-click="nextClick">
      </el-pagination>
    </el-row>

  </el-row>
</template>

<script>
import has from 'lodash/has'

export default {
  name: 'paged-table',
  props: {
    data: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    showActionColumn: {
      type: Boolean,
      default: false
    },
    actionColumnAttrs: {
      type: Object,
      required: false,
      default: function () {
        return {}
      }
    },
    paginationAttrs: {
      type: Object,
      required: false,
      default: function () {
        return {}
      }
    },
    paginationEvents: {
      type: Object,
      required: false,
      default: function () {
        return {}
      }
    },
    isBackEndPaged: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      currentPage: 1,
      currentPageSize: 5,
      paginationLayout: 'total, prev, pager, next, sizes',
      paginationPageSizes: [1, 5, 10, 20]
    }
  },
  watch: {
    paginationAttrs: {
      handler (newValue, oldValue) {
        if (has(newValue, 'page-size')) {
          this.currentPageSize = newValue['page-size']
        }

        if (has(newValue, 'layout')) {
          this.paginationLayout = newValue['layout']
        }

        if (has(newValue, 'page-sizes')) {
          this.paginationPageSizes = newValue['page-sizes']
        }
      },
      immediate: true,
      deep: true
    }
  },
  computed: {
    displayData () {
      if (this.isBackEndPaged) {
        return this.data
      }

      let start = 0
      let end = this.currentPageSize
      if (this.currentPage !== 1) {
        start = (this.currentPage - 1) * this.currentPageSize
        end = this.currentPageSize * this.currentPage
      }
      return this.data.slice(start, end)
    },
    total () {
      return this.data.length
    }
  },
  methods: {
    sizeChange (size) {
      this.currentPageSize = size
      this.$emit('size-change', size)
    },
    currentChange (currentPage) {
      this.currentPage = currentPage
      this.$emit('current-change', currentPage)
    },
    prevClick (page) {
      this.$emit('prev-click', page)
    },
    nextClick (page) {
      this.$emit('next-click', page)
    }
  }
}
</script>

<style scoped>

</style>
