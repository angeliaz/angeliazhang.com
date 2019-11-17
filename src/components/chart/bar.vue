<template>
  <div ref="barChart" class="bar-chart" :style="{width: width, height: height}"></div>
</template>
<script>
import echarts from 'echarts'
import { getLineConfig, getBarConfig } from './getConfig.js'
export default {
  name: 'barChart',
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
      
    }
  },
  mounted() {
    const barData = this.data
    const chart = echarts.init(this.$refs.barChart)
    const xData = (() => {
      const data = []
      for (let i = 1; i < 13; i++) {
        data.push(i + 'month')
      }
      return data
    })()
    const themes = ['red', 'blue', 'yellow', 'green']
    const legendData = []
    const seriesData = (() => {
      const result = []
      barData.series.forEach((item, index) => {
        legendData.push(item.name)
        let config
        if (item.type === 'bar') {
          config = getBarConfig(themes[index % themes.length])
        } else {
          config = getLineConfig(themes[index % themes.length], { showSymbol: true })
        }
        config = Object.assign(config, {name: item.name, data: item.data})
        result.push(config)
      })
      return result
    })()

    const options = {
      backgroundColor: '#344b58',
      title: {
        text: 'statistics',
        x: '20',
        top: '20',
        textStyle: {
          color: '#fff',
          fontSize: '22'
        },
        subtextStyle: {
          color: '#90979c',
          fontSize: '16'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          textStyle: {
            color: '#fff'
          }
        }
      },
      grid: {
        left: '5%',
        right: '5%',
        borderWidth: 0,
        top: 150,
        bottom: 95,
        textStyle: {
          color: '#fff'
        }
      },
      legend: {
        // x: '5%',
        // top: '10%',
        bottom: 10,
        textStyle: {
          color: '#90979c'
        },
        data: legendData
      },
      // calculable: true,
      xAxis: [{
        type: 'category',
        axisLine: {
          lineStyle: {
            color: '#90979c'
          }
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitArea: {
          show: false
        },
        axisLabel: {
          interval: 0
        },
        data: xData
      }],
      yAxis: [{
        type: 'value',
        splitLine: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#90979c'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          interval: 0
        },
        splitArea: {
          show: false
        }
      }],
      dataZoom: [/* {
        show: true,
        height: 30,
        xAxisIndex: [
          0
        ],
        bottom: 30,
        start: 0,
        end: 100,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle: {
          color: '#d3dee5'

        },
        textStyle: {
          color: '#fff' },
        borderColor: '#90979c'

      }, */ {
        type: 'inside',
        show: true,
        height: 15,
        start: 1,
        end: 35
      } ],
      series: seriesData
    }
    
    chart.setOption(options);
  } 
}
</script>
<style lang="scss">
</style>
