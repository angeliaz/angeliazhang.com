<template>
  <div class="table-fitler">
    <el-form :inline="true" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-position="right" label-width="100px"  size="small " class="filter-form">
      <el-row :gutter="10">
        <el-col :span="18">
          <el-form-item v-for="item in filterList" :key="item.prop" :label="item.label">
            <el-select v-model="ruleForm[item.prop]" :placeholder="item.label" v-if="item.layout === 'select'">
              <el-option :label="enumItem.desc" :value="enumItem.val" v-for="enumItem in item.enum" :key="enumItem.desc"></el-option>
            </el-select>
            <el-date-picker
              v-model="defaultTime1"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期" v-if="item.layout === 'datetimerange'">
            </el-date-picker>
            <el-input v-model="ruleForm[item.prop]" :placeholder="item.label" v-else-if="item.layout === 'text'"></el-input >
          </el-form-item>
        </el-col>
        <el-col :span="4">
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
        </el-col>
      </el-row>
    </el-form>

  </div>  
</template>

<script>
import { checkAge } from '@/utils/validate.ts';
export default {
  name: 'TableFilter',
  props: {
    filterList: {
      type: Array
    }
  },
  data() {
    return {
      defaultTime1: '',
      ruleForm: {
        age: ''
      },
      rules: {
        age: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate((valid, invalidObj) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!', invalidObj);
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    }
  }
}
</script>

<style lang="scss">
.filter-form {
  text-align: left;
}
</style>

