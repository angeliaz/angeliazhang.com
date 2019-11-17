/**
 * Event Loop(事件循环)
 * 1.javascript是一门单线程语言
 * 2.Event Loop是javascript的执行机制
 */

/* setTimeout(function(){
  console.log('定时器开始啦')
});

console.log('代码执行结束');
for (let i = 0 ; i < 10000; i++) {
  let a = i + 1;
}
console.log('after for loop')

// 实现一个sleep函数
const sleep = (time) => {
  return new Promise(resolve => setTimeout(resolve, time))
}
sleep(1000).then(() => console.log('eat'))
async function test(params) {
  await sleep(1000)
  console.log('eat')
  await sleep(1000)
  console.log('sleep')
}
test()

function sleep1(time, cb) {
  setTimeout(() => {
    cb && cb()
  }, time);
}
sleep1(1000, function (params) {
  console.log('eeee')
}) */

// async function async1() {
//   console.log('async1 start')
//   await async2()
//   console.log('async1 end')
// }
// async function async2() {
//   console.log('async2')
// }
// console.log('script start')
// setTimeout(function () {
//   console.log('settimeout')
// })
// async1()
// new Promise(function (resolve) {
//   console.log('promise1')
//   resolve()
// }).then(function () {
//   console.log('promise2')
// })
// console.log('script end')

// asyncEvent()

/* 
script start
async1 start
async2
async1 end

promise1
script end

promise2
settimeout
 */

console.log('start')

new Promise((resolve) => {
  console.log(1)
  resolve('promise1')
  console.log(2)
}).then(
  console.log(31),
  console.log(32),
  console.log(33)
)
.then((res) => {
  console.log(4, res)
})

setTimeout(() => {
  console.log(5)
  new Promise((resolve) => {
    console.log(6)
    resolve()
  }).then(() => {
    console.log(7)
  }).then(() => {
    console.log(9)
  })
}, 0)
setTimeout(() => {
  console.log(8)
}, 0)

console.log('end')

// start 1 2 3 end 31 4-promise1 5 6 7 9 8

/**
 * 1 12 6 13 2 3 4 5
 * 1 6 12 2 3 5 4
 */
