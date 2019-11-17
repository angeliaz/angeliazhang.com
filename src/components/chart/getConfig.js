import echarts from 'echarts'

const lineConfig = {
  name: '',
  type: 'line',
  smooth: true,
  symbol: 'circle',
  symbolSize: 5,
  showSymbol: false,
  lineStyle: {
    normal: {
      width: 1
    }
  },
  // 填充區域的信息
  areaStyle: {
    normal: {
      color: 'rgba(137, 189, 27, 0.3)',
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowBlur: 10
    }
  },
  // 折线拐点标志的样式
  itemStyle: {
    normal: {
      color: 'rgba(252, 230, 48, 1)',
      barBorderRadius: 0,
      label: {
        show: true,
        position: 'top',
        formatter(p) {
          return p.value > 0 ? p.value : ''
        }
      }
    }
  },
  data: []
}

const lineThemeConfig = [
  {
    name: 'green',
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(137, 189, 27, 0.3)'
        }, {
          offset: 0.8,
          color: 'rgba(137, 189, 27, 0)'
        }], false),
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowBlur: 10
      }
    },
    itemStyle: {
      normal: {
        color: 'rgb(137,189,27)',
        borderColor: 'rgba(137,189,2,0.27)',
        borderWidth: 12
      }
    }
  },
  {
    name: 'blue',
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(0, 136, 212, 0.3)'
        }, {
          offset: 0.8,
          color: 'rgba(0, 136, 212, 0)'
        }], false),
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowBlur: 10
      }
    },
    itemStyle: {
      normal: {
        color: 'rgb(0,136,212)',
        borderColor: 'rgba(0,136,212,0.2)',
        borderWidth: 12

      }
    }
  },
  {
    name: 'red',
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(219, 50, 51, 0.3)'
        }, {
          offset: 0.8,
          color: 'rgba(219, 50, 51, 0)'
        }], false),
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowBlur: 10
      }
    },
    itemStyle: {
      normal: {
        color: 'rgb(219,50,51)',
        borderColor: 'rgba(219,50,51,0.2)',
        borderWidth: 12
      }
    }
  },
  {
    name: 'yellow',
    stack: 'total', // tiled
    areaStyle: {
      normal: {
        /* color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(252, 230, 48, 0.1)'
        }, {
          offset: 0.8,
          color: 'rgba(252, 230, 48, 0)'
        }], false), */
        color: 'rgba(252, 230, 48, 0)',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowBlur: 10
      }
    },
    itemStyle: {
      normal: {
        color: 'rgba(252,230,48,1)',
        barBorderRadius: 0,
        label: {
          show: true,
          position: 'top',
          formatter(p) {
            return p.value > 0 ? p.value : ''
          }
        }
      }
    }
  }
]

const barConfig = {
  name: '',
  type: 'bar',
  stack: 'total',
  barMaxWidth: 35,
  barGap: '10%',
  itemStyle: {
    normal: {
      color: 'rgba(255, 144, 128, 1)',
      label: {
        show: true,
        textStyle: {
          color: '#fff'
        },
        position: 'insideTop',
        formatter(p) {
          return p.value > 0 ? p.value : ''
        }
      }
    }
  },
  data: []
}

const barThemeConfig = [
  {
    name: 'red',
    itemStyle: {
      normal: {
        color: 'rgba(255, 144, 128, 1)',
        label: {
          show: true,
          textStyle: {
            color: '#fff'
          },
          position: 'insideTop',
          formatter(p) {
            return p.value > 0 ? p.value : ''
          }
        }
      }
    }
  }, {
    name: 'blue',
    itemStyle: {
      normal: {
        color: 'rgba(0, 191, 183, 1)',
        barBorderRadius: 0,
        label: {
          show: true,
          position: 'top',
          textStyle: {
            color: 'rgba(0, 191, 183, 1)'
          },
          formatter(p) {
            return p.value > 0 ? p.value : ''
          }
        }
      }
    }
  }
]

export function getLineConfig(theme, option = {}) {
  const themeStyle = lineThemeConfig.filter(item => item.name === theme)[0] || lineThemeConfig[0]
  if (option.showSymbol) {
    themeStyle.showSymbol = true
    themeStyle.smooth = false
  }
  return Object.assign({}, lineConfig, themeStyle)
}

export function getBarConfig(theme, option = {}) {
  const themeStyle = barThemeConfig.filter(item => item.name === theme)[0] || barThemeConfig[0]
  return Object.assign({}, barConfig, themeStyle)
}
