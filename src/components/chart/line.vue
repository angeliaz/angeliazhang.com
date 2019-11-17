<template>
  <div>
    <div ref="lineChart" class="line-chart" :style="{width: width, height: height}"></div>
    <div ref="lineChart1" :style="{width: width, height: height}"></div>
    <div ref="multiBarChart" :style="{width: width, height: height}"></div>
    <div ref="multiBarChart1" :style="{width: width, height: height}"></div>
  </div>
</template>

<script>

import echarts from 'echarts'
import { debounce, throttle } from '@/utils/tool.js'
import { getLineConfig } from './getConfig.js'
import { singleBarData, multiBarData } from './dataset.js'

export default {
  name: 'lineChart',
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

    this.chart = echarts.init(this.$refs.lineChart)
    const themes = ['green', 'yellow', 'red']

    const legendData = []
    const series = (() => {
      const result = []
      data.series.forEach((item, index) => {
        let lineConfig = getLineConfig(themes[index % themes.length], { showSymbol: true })
        lineConfig = Object.assign(lineConfig, {name: item.name, data: item.data})
        result.push(lineConfig)
        legendData.push(item.name)
      })
      return result
    })()

    const options = {
      backgroundColor: '#394056',
      title: {
        top: 20,
        text: 'lineChart',
        textStyle: {
          fontWeight: 'normal',
          fontSize: 16,
          color: '#F1F1F3'
        },
        left: '1%'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          lineStyle: {
            color: '#57617B'
          }
        }
      },
      legend: {
        top: 20,
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: legendData,
        right: '4%',
        textStyle: {
          fontSize: 12,
          color: '#F1F1F3'
        }
      },
      grid: {
        top: 100,
        left: '2%',
        right: '2%',
        bottom: '2%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
          lineStyle: {
            color: '#57617B'
          }
        },
        data: data.xAxis
      }],
      yAxis: [{
        type: 'value',
        name: '(%)',
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#57617B'
          }
        },
        axisLabel: {
          margin: 10,
          textStyle: {
            fontSize: 14
          }
        },
        splitLine: {
          lineStyle: {
            color: '#57617B'
          }
        }
      }],
      series: series
    }
    
    this.chart.setOption(options)

    const datasetOption = {
      backgroundColor: '#394056',
      title: {
        top: 20,
        text: '单列柱状图',
        textStyle: {
          fontWeight: 'normal',
          fontSize: 16,
          color: '#F1F1F3'
        },
        left: '1%'
      },
      legend: {},
      dataset: singleBarData,
      // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
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
      series: [
        {
          type: 'bar',
          encode: {
            // 将 "amount" 列映射到 X 轴。
            x: 'product',
            // 将 "product" 列映射到 Y 轴。
            y: 'amount'
          },
          stack: 'total',
          barMaxWidth: 35,
          barGap: '10%',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(219, 50, 51, 0.3)'
              }, {
                offset: 0.8,
                color: 'rgba(219, 50, 51, 0.8)'
              }], false),
              label: {
                show: true,
                textStyle: {
                  color: 'rgba(219, 50, 51, 1)'
                },
                position: 'top',
                formatter(p) {
                  return p.value[1] > 0 ? p.value[1] : ''
                }
              }
            }
          }
        }
      ]
    }
    const chart1 = echarts.init(this.$refs.lineChart1)
    chart1.setOption(datasetOption)

    const multiBarOption = {
      legend: {
        textStyle: {
          fontSize: 12,
          color: '#F1F1F3'
        }
      },
      tooltip: {},
      backgroundColor: '#394050',
      title: {
        top: 20,
        text: 'multiBar',
        textStyle: {
          fontWeight: 'normal',
          fontSize: 16,
          color: '#F1F1F3'
        },
        left: '1%'
      },
      dataset: multiBarData,
      // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
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
      series: [
        { type: 'bar', itemStyle: {
            normal: {
              color: 'rgba(219, 50, 51, 0.3)',
              label: {
                show: true,
                textStyle: {
                  color: 'rgba(219, 50, 51, 1)'
                },
                position: 'top',
                formatter(p) {
                  return p.value[1] > 0 ? p.value[1] : ''
                }
              }
            }
          }},
        { type: 'bar', itemStyle: {
            normal: {
              color: 'rgba(255, 144, 128, 0.5)',
              label: {
                show: true,
                textStyle: {
                  color: 'rgba(255, 144, 128, 1)'
                },
                position: 'top',
                formatter(p) {
                  return p.value[1] > 0 ? p.value[1] : ''
                }
              }
            }
          } },
        { type: 'bar', itemStyle: {
            normal: {
              color: 'rgba(0, 191, 183, 0.5)',
              label: {
                show: true,
                textStyle: {
                  color: 'rgba(0, 191, 183, 1)'
                },
                position: 'top',
                formatter(p) {
                  return p.value[1] > 0 ? p.value[1] : ''
                }
              }
            }
          } },
        { type: 'bar', itemStyle: {
            normal: {
              color: 'rgba(252, 230, 48, 0.5)',
              label: {
                show: true,
                textStyle: {
                  color: 'rgba(252, 230, 48, 1)'
                },
                position: 'top',
                formatter(p) {
                  return p.value[1] > 0 ? p.value[1] : ''
                }
              }
            }
          } }
      ]
    }

    const multiBarOption1 = {
      legend: {
        textStyle: {
          fontSize: 12,
          color: '#F1F1F3'
        }
      },
      tooltip: {},
      backgroundColor: '#394050',
      title: {
        top: 20,
        text: 'multiBar',
        textStyle: {
          fontWeight: 'normal',
          fontSize: 16,
          color: '#F1F1F3'
        },
        left: '1%'
      },
      dataset: multiBarData,
      // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
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
      series: [
        { type: 'bar', seriesLayoutBy: 'row', itemStyle: {
            normal: {
              color: 'rgba(219, 50, 51, 0.3)',
              label: {
                show: true,
                textStyle: {
                  color: 'rgba(219, 50, 51, 1)'
                },
                position: 'top',
                formatter(p) {
                  return p.value[1] > 0 ? p.value[1] : ''
                }
              }
            }
          }},
        { type: 'bar', seriesLayoutBy: 'row', itemStyle: {
            normal: {
              color: 'rgba(255, 144, 128, 0.5)',
              label: {
                show: true,
                textStyle: {
                  color: 'rgba(255, 144, 128, 1)'
                },
                position: 'top',
                formatter(p) {
                  return p.value[1] > 0 ? p.value[1] : ''
                }
              }
            }
          } },
        { type: 'bar', seriesLayoutBy: 'row', itemStyle: {
            normal: {
              color: 'rgba(0, 191, 183, 0.5)',
              label: {
                show: true,
                textStyle: {
                  color: 'rgba(0, 191, 183, 1)'
                },
                position: 'top',
                formatter(p) {
                  return p.value[1] > 0 ? p.value[1] : ''
                }
              }
            }
          } },
        { type: 'bar', seriesLayoutBy: 'row', itemStyle: {
            normal: {
              color: 'rgba(252, 230, 48, 0.5)',
              label: {
                show: true,
                textStyle: {
                  color: 'rgba(252, 230, 48, 1)'
                },
                position: 'top',
                formatter(p) {
                  return p.value[1] > 0 ? p.value[1] : ''
                }
              }
            }
          }
        }
      ]
    }

    const multiBar = echarts.init(this.$refs.multiBarChart)
    multiBar.setOption(multiBarOption)

    const multiBar1 = echarts.init(this.$refs.multiBarChart1)
    multiBar1.setOption(multiBarOption1)

    window.addEventListener('resize', throttle(this.chart.resize, 100))
    
  },
  methods: {
    test() {
      console.log('test')
    }
  }
}
</script>
<style lang="scss">
</style>
