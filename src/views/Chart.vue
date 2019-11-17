<template>
  <div class="chart">
    <p>This is an test page</p>
    <div class="test-float clearfix">
      <p>This is an test page</p>
      <!-- <div class="right"></div> -->
      <!-- <div class="clear">
        test
      </div> -->
    </div>
    <!-- <img ref="testImg" src="http://rt3.map.gtimg.com/tile/?z=16&x=53957&y=40701&version=105&styleid=0" alt="" :style="'width: ' + imgWidth + 'px'"> -->
    <div class="test">
      <p>test debounce:</p>
      <p>content: {{inputText}}</p>
      <input type="text" ref="input" />
    </div>
    <line-chart width="100%" height="300px" :data="lineData" />
    <bar-chart width="100%" height="500px" :data="barData" />
    <pie-chart width="100%" height="500px" :data="barData" />
  </div>
</template>

<script>
import { debounce, throttle } from '@/utils/tool.js'
import lineChart from "@/components/chart/line.vue"
import barChart from "@/components/chart/bar.vue"
import pieChart from "@/components/chart/pie.vue"
export default {
  name: 'Chart',
  components: {
    lineChart,
    barChart,
    pieChart
  },
  data() {
    return {
      inputText: '',
      imgWidth: 200,
      lineData: {
        xAxis: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55', '14:00', '14:05'],
        series: [
          {name: 'CMCC', data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122]},
          {name: 'CTCC', data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150]},
          {name: 'CUCC', data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122]}
        ]
      },
      lineData1: {
        xAxis: ['2019', '2018', '2017', '2016'],
        series: [
          {name: 'ROE', data: [220, 182, 191, 134]},
          {name: 'ROI', data: [120, 110, 125, 145]},
          {name: 'EBIT', data: [220, 182, 125, 145]}
        ]
      },
      barData: {
        xAxis: [],
        series: [
          {name: 'female', data: [109, 1917, 2455, 2310, 1719, 1433, 1544, 3285, 5208, 3372, 2484, 4078 ], type: 'bar'},
          {name: 'male', data: [309, 2317, 2655, 2610, 1719, 1433, 1544, 3285, 4208, 3572, 3484, 5078 ], type: 'bar'},
          {name: 'average', data: [709, 3217, 2655, 2010, 1919, 1233, 1644, 3265, 5108, 3472, 2284, 2078 ], type: 'line'}
        ]
      }
    }
  },
  created() {
    this.barData.xAxis = (() => {
      const data = []
      for (let i = 0; i < 13; i++) {
        data.push(i + 'month')
      }
      return data
    })()
  },
  mounted() {
    this.$refs.input.addEventListener('input', throttle(this.getInputText, 200))
    // window.addEventListener('resize', this.getInputText)
    // window.addEventListener('resize', throttle(this.setImgWidth, 100))
  },
  methods: {
    getInputText(e) {
      this.inputText = e.target.value
    },
    setImgWidth() {
      this.imgWidth = window.innerWidth * 0.8
    }
  }
}
</script>
<style lang="scss">
.chart {
  .test {
    text-align: left;
  }
  .test-float {
    /* &:after {
      display: block;
      content: "";
      clear: both;
      visibility: hidden;
    } */
    overflow: auto;
    // float: left;
    .clear {
      clear: both;
    }
    p {
      float: left;
    }
    .right {
      float: right;
      width: 200px;
      height: 200px;
      background: pink;
    }
  }
  img {
    clear:both;
  }
}
</style>
