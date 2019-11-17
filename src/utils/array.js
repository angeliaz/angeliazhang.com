/**
 * 数组去重
 */
// new Set
function uniqueByES6(array) {
  // return Array.from(new Set(array))
  return [...new Set(array)]
}
const needUniqueArr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined,undefined, null, null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log('uniqueArray', uniqueByES6(needUniqueArr))
window.test123 = 'test'
console.log(12)
// Array splice
function uniqueBySplice(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        array.splice(j, 1)
        j--
      }
    }
  }
  return array;
}
console.log('uniqueBySplice', uniqueBySplice(needUniqueArr))

// indexOf || includes || 对象属性不能相同 || sort || reduce 
function uniqueByIndexOf(array) {
  const target = []
  for (let i = 0; i < array.length; i++) {
    if (!target.includes(array[i])) {
      target.push(array[i])
    }
  }
  return target
}
console.log('uniqueByIndexOf', uniqueByIndexOf(needUniqueArr))

// hasOwnProperty
function uniqueByOwnProperty(arr) {
  const obj = {}
  return arr.filter((item, index) => {
    return obj.hasOwnProperty(typeof item + item) ? false : obj[typeof item + item] = true
  })
}
console.log('uniqueByOwnProperty', uniqueByOwnProperty(needUniqueArr))

// filter
function uniqueByFilter(arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item, 0) === index
  })
}
console.log('uniqueByFilter', uniqueByFilter(needUniqueArr))

/**
 * for...of
 */

/**
 * 将数组扁平化并去除其中重复数据，最终得到一个升序且不重复的数组
 *  toString + sort + new Set + Array.from
 *  [... new Set]
 *   Array.flat
 */
const testArr = [[1,2,3,4], [0], [5,6,7,1,3], 8]
let uniqueAndSortArr = Array.from(new Set(testArr.toString().split(',').map(Number).sort((a, b) => a - b)))
uniqueAndSortArr = [...new Set(testArr.toString().split(',').map(Number).sort((a, b) => a - b))]
uniqueAndSortArr = Array.from(new Set(testArr.flat(Infinity).sort((a, b) => a - b)))

// ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'] 和 ['A', 'B', 'C', 'D']，合并为 ['A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D']

// 利用index累计
function comnineArrByIndex(arr1, arr2) {
  let target = []
  let index = 0
  arr1.forEach(item => {
    if (item.charAt(0) === arr2[index]) {
      target.push(item)
    } else {
      target.push(arr2[index])
      target.push(item)
      index++
    }
  })
  target.push(arr2[arr2.length - 1])
  return target
}
// console.log('comnineArrByIndex', comnineArrByIndex(['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'], ['A', 'B', 'C', 'D']))

function combineArrBySplice(arr1, arr2) {
  let curIndex = 0;
  arr2.forEach(item => {
    while (curIndex < arr1.length - 1) {
      curIndex++;
      if (arr1[curIndex].charAt(0) !== item) {
        arr1.splice(curIndex, 0, item)
        break;
      }
    }
  })
  return arr1
}
// console.log('combineArrBySplice', combineArrBySplice(['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'], ['A', 'B', 'C', 'D']))

function combineArrWithSort(arr1, arr2) {
  arr2 = arr2.map(item => item + 3)
  arr1 = arr1.concat(arr2)
  return arr1.sort().map(item => {
    return item.includes('3') ? item = item.replace('3', '') : item
  })
}
// console.log('combineArrWithSort', combineArrWithSort(['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'], ['A', 'B', 'C', 'D']))


// 找到字符串中重复次数最多的字符
function findRapeatMax(str) {
  let maxChar;
  let maxCount = 0;
  const strObj = {}
  const strArr = str.replace(/\s/g, '').split('')
  for (let i = 0; i < strArr.length; i++) {
    if (strObj[strArr[i]]) {
      strObj[strArr[i]]++
    } else {
      strObj[strArr[i]] = 1
    }
  }
  const keyArr = Object.keys(strObj);
  for (let j = 0; j < keyArr.length; j++) {
    if (strObj[keyArr[j]] > maxCount) {
      maxChar = keyArr[j]
      maxCount = strObj[keyArr[j]]
    }
  }
  return {
    maxChar, maxCount
  }
}

function findRepeatMaxWithFor(str) {
  let maxChar;
  let maxCount = 0;
  const strObj = {}
  const strArr = str.replace(/\s/g, '').split('')
  strArr.forEach(item => {
    strObj[item] ? strObj[item]++ :  strObj[item] = 1
    if (strObj[item] > maxCount) {
      maxCount = strObj[item]
      maxChar = item
    }
  })
  return { maxChar, maxCount };
}

function findRepeatMaxWithReduce(str) {
  let maxChar;
  let maxCount = 0;
  const strArr = str.replace(/\s/g, '').split('')
  strArr.reduce((acc, item) => {
    acc[item] = acc[item] ? acc[item] + 1 : 1
    if (acc[item] > maxCount) {
      maxChar = item
      maxCount = acc[item]
    }
    return acc;
  }, {})
  return { maxChar, maxCount }; 
}

const str = 'this is a test test ts project. skajdf; t2sldjfwel p'
console.log('findRapeatMax', findRapeatMax(str))
console.log('findRepeatMaxWithFor', findRepeatMaxWithFor(str))
console.log('findRepeatMaxWithReduce', findRepeatMaxWithReduce(str))

/**
 * 输入一个整形数组，数组里有正数也有负数。
 * 数组中连续的一个或多个整数组成一个子数组，每个子数组都有一个和。
 * 求所有子数组的和的最大值，要求时间复杂度为O(n)。
 */
function getMaxSubArr(arr) {
  let currentSum = 0;
  let maxCount = 0;
  arr.forEach(item => {
    if (currentSum < 0) {
      currentSum = item
    } else {
      currentSum += item
    }
    if (currentSum > maxCount) {
      maxCount = currentSum
    }
  })
  return { maxCount }
}

console.log('getMaxSubArr', getMaxSubArr([1, -2, 3, 10, -4, 7, 2, -5]))

/**
 * 类数组转数组
 */
const nodes = document.querySelectorAll('div');
console.log('nodes', typeof nodes)

// 1. for

// 2. 这种方法是借用了数组原型中的slice方法，返回一个数组
console.log('node slice', Array.prototype.slice.call(nodes, 0))
console.log('node slice 1', [].slice.call(nodes, 0))

// 3.Array.from() 方法从一个类似数组或可迭代对象中创建一个新的数组实例
console.log('nodes array from', Array.from(nodes))

// 4.同样是ES6中新增的内容，扩展运算符（…）也可以将某些数据结构转为数组
const nodelist = [...nodes]
console.log('nodes ...', Array.from(nodes))

// 使用reduce方法实现forEach、map、filter
const arr1 = [12, 21, 3];
const arr2 = arr1.map(function(item) {
  return item * 2
})
// console.log('map', arr1, arr2)

// forEach:已删除或者未初始化的项目将被跳过
Array.prototype.selfForEach = function () {
  const arr = this
  const [fn , thisArg] = [].slice.call(arguments)
  for (let i = 0; i < arr.length; i++) {
    fn.call(thisArg, arr[i], i , arr)
  }
}

// Array.prototype.selfForEach

// 使用for实现map
Array.prototype.selfMap = function() {
  const ary = this
  const result = []
  const [ fn, thisArg ] = [].slice.call(arguments)
  for (let i = 0; i < ary.length; i++) {
    result.push(fn.call(thisArg, ary[i], i, ary))
  }
  return result
}
console.log('selfMap', arr1.selfMap((item, index) => {
  return { item, index }
}, { test: '1'}));

// reduce -> map
Array.prototype.reduceMap = function() {
  const ary = this
  const [ fn, thisArg ] = [].slice.call(arguments)
  return ary.reduce((acc, cur, index) => {
    return acc.concat([fn.call(thisArg, cur, index, ary)])
  }, [])
}
console.log('reduceMap', arr1.reduceMap((item, index) => {
  return { item, index }
}, { test: '1'}))

Array.prototype.selfFilter = function() {
  const ary = this;
  const result = [];
  const [ fn, thisArg ] = [].slice.call(arguments);
  for (let i = 0; i < ary.length; i++) {
    if (fn.call(thisArg, ary[i], i, ary)) {
      result.push(ary[i])
    }
  }
  return result;
}
console.log('selfFilter', arr1.selfFilter(item => {
  return item > 10;
}))

Array.prototype.reduceFitler = function () {
  const ary = this;
  const [ fn, thisArg ] = [].slice.call(arguments)
  return ary.reduce((acc, cur, index) => {
    if (fn.call(thisArg, cur, index, ary)) {
      return acc.concat([cur]);
    } else {
      return acc;
    }
  }, [])
}
console.log('reduceFitler', arr1.reduceFitler(item => {
  return item > 10;
}))

// repeat
function repeat(fn, times, wait) {
  return str => {
    let count = 0;
    const timer = setInterval(() => {
      if (count <= times) {
        count++
        fn.call(this, str)
      } else {
        clearInterval(timer)
      }
    }, wait);
  }
}

const repeatFunc = repeat(console.log, 3, 2000)
