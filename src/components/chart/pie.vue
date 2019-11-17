<template>
  <div>
    <div ref="pieChart" class="pie-chart" :style="{width: width, height: height}"></div>
  </div>
</template>

<script>

import echarts from 'echarts'
import { debounce, throttle } from '@/utils/tool.js'
import { getLineConfig } from './getConfig.js'
import { pieData } from './dataset.js'

export default {
  name: 'pieChart',
  props: {
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    },
    data: {
      type: Object, 
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    const data = this.data

    this.chart = echarts.init(this.$refs.pieChart)

    const options = {
      backgroundColor: '#344b58',
      title: {
        top: 20,
        text: '饼状图',
        textStyle: {
          fontWeight: 'normal',
          fontSize: 12,
          color: '#F1F1F3'
        },
        left: '1%'
      },
      legend: {
        bottom: 10,
        textStyle: {
          color: '#90979c'
        }
      },
      tooltip: {},
      dataset: pieData,
      xAxis: {
        type: 'category',
        axisLine: {
          lineStyle: {
            color: '#57617B'
          }
        }
      },
      yAxis: {
        axisLine: {
          lineStyle: {
            color: '#57617B'
          }
        },
        splitLine: {
          lineStyle: {
            color: '#57617B'
          }
        }
      },
      series: [{
        type: 'pie',
        radius: 60,
        center: ['30%', '50%'],
        animationEasing: 'cubicInOut',
        animationDuration: 1000
      }, {
        type: 'pie',
        radius: 60,
        center: ['70%', '50%'],
        encode: {
          itemName: 'product',
          value: '2018'
        },
        animationEasing: 'cubicInOut',
        animationDuration: 1000
      }]
    }
    this.chart.setOption(options)

    window.addEventListener('resize', throttle(this.chart.resize, 100))
    
  },
  methods: {}
}
</script>
<style lang="scss">
</style>
