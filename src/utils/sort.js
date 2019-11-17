// 
function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}
const arr = [101, 1, 3, 5, 2, 0, 10, 201, 2, 8, 6]
// console.log('bubbleSort 1', bubbleSort([101, 1, 3, 5, 2, 0, 10, 201, 2, 8, 6]))

function quickSort(arr) {
  if (arr.length <= 1) return arr
  const left = []
  const right = []
  const privo = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= privo) {
      left.push(arr[i])
    } else if(arr[i] > privo) {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(privo, quickSort(right))
}
console.log('quickSort 1', quickSort([101, 1, 3,2, 5, 0, 10, 201, 2, 8, 6]))

function quick_recursive1(arr, type) {
  // 记录数组长度
  var len = arr.length;
  // 若果数组长度为空
  if (len === 0) {
    return [];
  }
  var left = [],
    right = [];
  var pivot = arr[0];
  for (var i = 0; i < len; i++) {
    if (arr[i] < pivot) {
      if (!type || type === 'asc') { // 顺序排序
        left.push(arr[i]);
      } else if (type === 'desc') {
        right.push(arr[i]);        // 逆序排序
      }
    } else if (arr[i] > pivot) {
      if (!type || type === 'asc') { // 顺序排序
        right.push(arr[i]);
      } else if (type === 'desc') {
        left.push(arr[i]);        // 逆序排序
      }
    }
  }
  return quick_recursive1(left, type).concat(pivot, quick_recursive1(right, type));
}
console.log(quick_recursive1([1, 101, 1, 3, 5, 2, 0, 10, 201, 2, 8, 6], 'asc'))

// 时间复杂度O(n^2)
function bubbleSortArr(arr) {
  let length = arr.length
  while(length--) {
    for (let j = 0; j < length; j++) {
      const current = arr[j]
      const next = arr[j + 1]
      if (current > next) {
        [arr[j], arr[j + 1]] = [next, current]
      }
      // if (arr[j] > arr[j + 1]) {
      //   let temp = arr[j]
      //   const current = 
      //   arr[j] = arr[j + 1]
      //   arr[j + 1] = temp
      // }
    }
  }
  return arr
}
console.log('bubbleSortArr', bubbleSortArr(arr))

// 类比扑克牌
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
      } else {
        break
      }
    }
  }
  return arr
}
console.log('insertSort', insertSort(arr))

function quickSortArr(arr) {
  if (arr.length <= 1) return arr
  const left = []
  const right = []
  const base = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < base) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSortArr(left).concat(base, quickSortArr(right))
}
console.log('quickSortArr', quickSortArr(arr))

/**
 * 实现数组乱序
 */
function randomSort(arr) {
  return arr.sort(() => Math.random() - 0.5)
}

// 保证每个位置的元素之间都有比较
function shuffle(arr) {
  let newArr = arr.map(item => ({val: item, ran: Math.random()}))
  newArr.sort((a, b) => a.ran - b.ran)
  arr.splice(0, arr.length, ...newArr.map(i => i.val))
  return arr
}
console.log('randomSort', randomSort(arr))
console.log('shuffle', shuffle(arr))

// 每次把最后一个元素，跟之前随机一个元素换位置
function fisherShuffle(arr) {
  let m = arr.length
  while (m > 1) {
    let index = Math.floor(Math.random() * m--);
    [arr[m], arr[index]] = [arr[index], arr[m]]
  }
  return arr
}
console.log('fisherShuffle', fisherShuffle(arr))

// console.log(test)
