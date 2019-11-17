<template>
  <div class="dataset">
    <el-table
      :data="taskData.list"
      border
      fit
      size="small"
      style="width: 100%"
      class="data-table"
      tooltip-effect="light"
      :highlight-current-row="true"
      :show-summary="true"
      :row-class-name="tableRowClassName"
      @selection-change="handleSelectionChange"
      :default-sort = "{prop: 'task_id', order: 'ascending'}">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        :prop="item.prop"
        :label="item.label"
        :width="item.width ? item.width : 'auto'"
        :sortable="item.sortable"
        v-for="item in fieldList" :key="item.prop">
        <template  slot-scope="scope">
          <a href="javascript:" v-if="item.is_link" @click="gotoLink(scope.row[item.prop])">{{scope.row[item.prop]}}</a>
          <p v-else-if="item.format"><i class="el-icon-time"></i>  {{getPropFieldName(scope.row[item.prop], enumMap[item.prop]) | timeFormat}}</p>
          <p v-else>{{getPropFieldName(scope.row[item.prop], enumMap[item.prop])}}</p>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="150">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="taskData.page"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="taskData.size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="taskData.total">
    </el-pagination>
  </div>  
</template>

<script>
import { checkAge } from '@/utils/validate.ts';
export default {
  name: 'DataTable',
  props: {
    fieldList: {
      type: Array
    },
    taskData: {
      type: Object
    },
    enumMap: {
      Object
    }
  },
  components: {
  },
  filters: {
    timeFormat: value => {
      return value.replace(/T|(\.\d+)/g, ' ');
    }
  },
  data() {
    return {}
  },
  methods: {
    getPropFieldName(value, enumList) {
      if (enumList && enumList.length) {
        const filterField = enumList.filter(item => {
          return item.val === value;
        });
        return filterField.length ? filterField[0].desc : value;
      } else {
        return value;
      }
    },
    tableRowClassName({row, rowIndex}) {
      if (rowIndex % 2 === 1) {
        return 'success-row';
      } else {
        return '';
      }
    },
    handleClick(e) {
      console.log(`当前页: ${e}`);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleSelectionChange(val) {
      console.log(`当前页: ${val}`);
    },
    gotoLink(id) {
      this.$router.push(`/statistics/gdp/${id}`)
      // this.$router.push(`/statistics/gdp-${id}/${id}`)
    }
  }
}
</script>

<style lang="scss">
.dataset {
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
}
.data-table {
  width: 100%;
  margin-bottom: 30px;
}
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .el-table a {
    color: #0af;
    text-decoration: underline;
  }
</style>

