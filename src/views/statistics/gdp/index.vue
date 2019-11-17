<template>
  <div class="gdp">
    <input type="text" class="test-input" v-model="message">
    <p>{{message}}</p>
    <!-- <div v-for="item in articleList" :key="item.title">
      <p>{{item.title}}</p>
    </div> -->
    <!-- <div v-for="item in data1" :key="item">
      <p>{{item}}</p>
    </div> -->
    <p> name: {{person.name}} - age: {{person.age}}</p>
    <year test="test" year="20118" 
      v-bind.sync="person" />
    <data-filter :filter-list="filterList"/>
    <data-table :field-list="fieldList" :task-data="taskData" :enum-map="enumMap" />
  </div>  
</template>

<script>
import { checkAge } from '@/utils/validate.ts';
import dataFilter from './filter.vue';
import dataTable from './table.vue';
import year from './year/index.vue';
import { mapState, mapGetters, mapActions } from 'vuex';
import request from '@/utils/request'

export default {
  name: 'gdp',
  components: {
    dataFilter,
    dataTable,
    year
  },
  computed: {
  },
  data() {
    return {
      message: '1',
      person: {
        name: 'name',
        age: 18
      },
      articleList: [],
      task: {
        enumMap: [],
        fieldList: [],
        filterList: [],
        taskData: {
          page: 1,
          pages: 1,
          size: 20,
          total: 0,
          list: []
        },
      }
    };
  },
  computed: {
    enumMap()  {
      return this.task.enumMap
    },
    fieldList() {
      return this.task.fieldList
    },
    taskData() {
      return this.task.taskData
    },
    filterList() {
      return this.task.filterList.map(item => {
        const fieldData = this.task.fieldList.filter(fieldItem => {
          return fieldItem.prop === item.prop;
        });
        if (fieldData.length) {
          item.label = fieldData[0].label;
        }
        item.enum = this.task.enumMap[item.prop];
        return item;
      });
    }
  },
  async created() {
    const that = this;
    const res = await request.get('/api/article');
    this.articleList = res.data

    this.getTaskList().then(res => {
      // console.log(39, res);
    });

    setTimeout(() => {
      // this.articleList[0] = {title: 'test'};
      // this.$set(this.articleList, 0, {title: 'test'})
      /* this.articleList.splice(0, 1, {title: 'test'})
      this.articleList = this.articleList.filter(item => {
        return item.id > 0;
      }) */
      /* Object.assign(this.person, {
        gender: 'men'
      }) */
      console.log(this.person)
      // this.person.gender = 'men';
      // delete this.person.age;
      // this.$set(this.person, 'gender', 'men');
    }, 2000);
  },
  methods: {
    // this.$store.dispatch('statistics/getArticleList')
    ...mapActions({
      getTodayWeather: 'home/getTodayWeather'
    }),
    async getTaskList(params) {
      const res = await request.get('/api/task', { params })
      this.task = JSON.parse(res).data
      return this.task
    }
  }
}
</script>

<style lang="scss">

</style>

