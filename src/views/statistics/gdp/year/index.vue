<template>
  <div class="about">
    <h3>This is an {{test}} page year: {{year}}</h3>
    <p>{{name}} - {{age}}</p>
    <div id="id" class="class">
      <span>bugreports</span>
    </div>
    <table id="data">
        <thead>
            <tr>
                <th class="date" @click="sortNum">日期</th>
                <th class="total" @click="calc(13213)">总次数</th>
            </tr>
        </thead>
        <tbody id="tbody">
            <tr>
                <td>2017年10月23日</td>
                <td>68,112</td>
            </tr>
            <tr>
                <td>2017年8月6日</td>
                <td>68,020</td>
            </tr>
            <tr>
                <td>2017年11月11日</td>
                <td>69,433</td>
            </tr>
            <tr>
                <td>2016年5月12日</td>
                <td>69,699</td>
            </tr>
            <tr>
                <td>2017年1月18日</td>
                <td>42,565</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import { debounce, throttle } from '@/utils/tool'
export default {
  name: 'year',
  props: {
    test: String,
    year: String,
    name: String,
    age: Number
  },
  data() {
    return {
      sort: 'asc'
    }
  },
  created() {
    setTimeout(() => {
      this.$emit('update:name', 'neo')
    }, 2000);
  },
  mounted() {
    const fn = function () {
      console.log(2)
    }
    window.onresize = throttle(fn, 200)
  },
  methods: {
    formatDate(t) {
      return t.getFullYear() + '年' + (t.getMonth() + 1) + '月' + t.getDate() + '日'
    },
    formatCount(num) {
      return Math.floor(num / 1000) + ',' + num % 1000 
    },
    sortNum() {
      const tbody = document.querySelector('#data tbody')
      const rows = Array.prototype.slice.call(tbody.rows)
      rows.sort((a, b) => {
        const dateA = new Date(a.cells[0].innerHTML.replace(/[\u4e00-\u9fa5](\d)/g, '-$1').replace(/[\u4e00-\u9fa5]/g, ''))
        const dateB = new Date(b.cells[0].innerHTML.replace(/[\u4e00-\u9fa5](\d)/g, '-$1').replace(/[\u4e00-\u9fa5]/g, ''))
        return this.sort === 'asc' ? dateA - dateB : dateB - dateA
      })
      let html = ''
      tbody.innerHTML = ''
      rows.forEach(item => {
        tbody.appendChild(item)
      })
      this.sort = this.sort === 'asc' ? 'desc' : 'asc'

      /* const data = []
      const dataItem = {}
      const nodes = document.querySelectorAll('#tbody tr td')
      Array.prototype.slice.call(nodes).forEach((item, idx) => {
        console.log(item, item.innerHTML)
        if (idx % 2 === 1) {
          data[Math.floor(idx / 2)].count = item.innerHTML.replace(',', '')
        } else {
          data[Math.floor(idx / 2)] = {}
          data[Math.floor(idx / 2)].date = new Date(item.innerHTML.replace(/[\u4e00-\u9f6a](\d)/g, '-$1').replace(/[\u4e00-\u9f6a]/g, ''))
        }
      })
      console.log(data)
      data.sort((a, b) => {
        return this.sort === 'asc' ? a.date - b.date : b.date - a.date
      })
      let html = ''
      data.forEach(item => {
        html += `<tr><td>${this.formatDate(item.date)}</td><td>${this.formatCount(item.count)}</td></tr>`
      })
      this.sort = this.sort === 'asc' ? 'desc' : 'asc'
      document.querySelector('#tbody').innerHTML = html
      console.log(data) */
    },
    isPrime(n){
      for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0) {
          return false
        }
      }
      return true
    },
    calc(n) {
      console.log(this.isPrime(39))
      const arr = []
      for (let i = 2; i <= n; i++) {
        if (n % i === 0) {
          n = n / i
          arr.push(i)
          i--
        }
      }
      return arr
    }
  }
}
</script>
<style>
@keyframes changebox  {
  10% {
    width: 100px;
    height: 100px;
    background: pink;
  }
  50% {
    width: 50%;
    height: 50px;
    background: lightgreen;
  }
  90% {
    width: 100px;
    height: 100px;
    background: purple;
  }
}
@keyframes go {
  /* 0% {background-position: 0 0; }
  33.3% {background-position: -300px 0; }
  66.6% {background-position: -600px 0; } */
  100% {background-position: -1800px 0; }
}
.class {
  width: 300px;
  height: 490px;
  /* background: pink; */
  background: url(../../../../assets/test.jpg);
  /* transition: all 1s ease-in 1s; */
  opacity: 1;
  /* animation: changebox 2s ease-in 0.2s 1 backwards; */
  animation: go 1s steps(6, end) 3s 1 forwards;
}
.class:hover {
  animation-play-state: paused;
}

</style>
