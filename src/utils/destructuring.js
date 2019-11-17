/**
 * 解构:ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构
 */

let [head, ...tail] = [1, 2, 3, 4]
console.log(head, tail)

function add() {
  const [ first, ...others ] = arguments
  console.log(first, others)
}
add('a', '1', 1)

// let [x = 1, y = x] = [1, 2]; // x=1; y=2
let [x = y, y = 1] = [];
console.log(x, y)

// 解构对象
let { foo, bar, baz } = { foo: 'aaa', bar: 'bbb' }
console.log(foo, bar, baz) // aaa bbb undefined

// 可以很方便地将现有对象的方法，赋值到某个变量
let { sqrt, pow, sin, cos } = Math
let { log } = console
log('log test')

const node = {
  loc: {
    start: {
      line: 1,
      column: 5
    }
  }
}
const { loc, loc: { start, start: { line } } } = node
console.log('node', loc, start)

// 函数解构赋值
function plus(x, { test = 'test' }, ...y) {
  console.log(x, y, test)
  console.log(...arguments)
}
plus([1,2], { test1: 111}, [1, 2])

function fn(...args) {
  console.log('fn', args)
}
fn('args1', 'args2')

// 遍历map
const amap = new Map()
amap.set('first', 'one')
amap.set('second', 'two')
for (let [key, value] of amap) {
  console.log(`key ${key} is: ${value}`)
}

// swap 交换
let v1 = 1
let v2 = 2
const [ prev, next ] = [ v2, v1 ]
console.log(prev, next)

// use rest items to clone
const [ ...cloneArrs ] = [ v1, v2]
console.log('clone arr', cloneArrs)

