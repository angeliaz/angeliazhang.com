/**
 * 
 */
const data = [{id: 1}, {id: 2}]
const jsonstr = JSON.stringify(data)
const jsonobj = JSON.parse(jsonstr)
console.log('to json', jsonstr)

/**
 * to array
 */
const str = 'this is a test page'

// split
const arrFrStr = str.replace(/\s/g, '').split('')
console.log('to array', arrFrStr)

// for循环str

/**
 * to string
 */
const arr = [1, 2, 4, 5, 3]
// join
const strFrArr = arr.join('')
// toString
const strFrArr1 = arr.toString().replace(/,/g, '')
// for 循环 拼接字符串
const strFrArr2 = arr.reduce((acc, cur) => acc += '' + cur )
console.log('to string', strFrArr, strFrArr1, strFrArr2)

/**
 * Object to Array
 */
const obj = { a: 1, b: 2}
const arrFrObj = Object.keys(obj)
const arrFrObj1 = Object.values(obj)
console.log('object to arr', arrFrObj, arrFrObj1)

/**
 * Array to Object
 */
const objFrArr = Object.assign({}, arr)
const objFrArr1 = { ...arr }
const objFrArr2 = arr.reduce((acc, cur, i) => {
  acc[i] = cur
  return acc
}, {})
console.log('array to object', objFrArr, objFrArr1, objFrArr2)

/**
 * 类数组转数组
 */
const nodes = document.querySelectorAll('div')
console.log('nodes type', typeof nodes, Object.prototype.toString.call(nodes))
// for of
// 1. for循环
const nodesFor = []
for (let node of nodes) {
  nodesFor.push(node)
}
console.log('nodesFor', nodesFor, Object.prototype.toString.call(nodesFor))
// 2. Array slice
const nodeSlice = Array.prototype.slice.call(nodes)
console.log('nodeSlice', nodeSlice, Object.prototype.toString.call(nodeSlice))
// 3. 扩展运算符
const nodeList = [...nodes]
console.log('nodeList', nodeList.length, Object.prototype.toString.call(nodeList))
// 4. Array.from
console.log('array.from', Array.from(nodes))

// for of  for...in
// 异步
Array.prototype.arrCustom = function () { };
let iterable = [3, 5, 7]
iterable.foo = 'hello'
for (let key in iterable) {
  console.log('iterable', key)
}
for (let it of iterable) {
  console.log('for of', it)
}
// for (const it of iterable) {
//   setTimeout(() => {
//     console.log('it', it)
//   }, 100);
// }
// for (let i = 0; i < iterable.length; i++) {
//   setTimeout(() => {
//     console.log('for', i)
//   }, 100);
// }