import { binaryTree, tree } from './data'

const { log } = console

/**
 * 动态规划：在对问题求解时，由以求出的局部最优解来推导全局最优解。
 * @param {*} tree 
 * @param {*} fn 
 */
// 斐波拉契数列 1 1 2 3 5
// 时间复杂度为O(2^n)
function fibonacci(n) {
  if (n <= 0) return 0
  if (n === 1) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}
console.log('fibonacci', fibonacci(4))

// 动态规则
function fibonacciDp(n) {
  let prev1 = 0
  let prev2 = 1
  let sum = 0
  for (let i = 1; i <= n; i++) {
    prev1 = prev2
    prev2 = sum
    sum = prev1 + prev2
  }
  return sum
}
console.log('fibonacciDp', fibonacciDp(2))

// 0-1背包问题： 且背包的容积为 16, 使得背包中物品价值最大
// 时间复杂度: O（nm）
function maxbBagValue(capacity, arr) {
  const value = []
  for (let w = 0; w <= capacity; w++) {
    for (let i = 0; i < arr.length; i++) {
      if (!w) {
        value[w] = 0
      } else if (arr[i].size <= w) {
        value[w] = Math.max(value[w - arr[i].size] + arr[i].value, value[w] || 0)
      } else {
        value[w] = Math.max(value[w - 1] || 0, value[w])
      }
    }
  }  
  return value[capacity]
}

/**
 * 贪心算法：在对问题求解时，不考虑全局，总是做出局部最优解的方法。
 * 
 */
function tanxin(capacity, arr) {
  arr.sort((a, b) => {
    return parseFloat(b.value / b.size) - parseFloat(a.value / a.size)
  })
  let selected = 0
  let maxValue = 0
  for (let i = 0; i < arr.length && selected < capacity; i++) {
    if (arr[i].size <= capacity - selected) {
      maxValue += arr[i].value
      selected += arr[i].size
    } else {
      maxValue += arr[i].value / arr[i].size * ((capacity - selected))
      selected = capacity
    }
  }
  return maxValue
}

console.log('maxbBagValue', maxbBagValue(16, [
  {value: 4, size: 3},
  {value: 5, size: 4},
  {value: 10, size: 7},
  {value: 11, size: 8},
  {value: 13, size: 9}
]))
console.log('tanxin', tanxin(16, [
  {value: 4, size: 3},
  {value: 5, size: 4},
  {value: 10, size: 7},
  {value: 11, size: 8},
  {value: 13, size: 9}
]))


// 股票最大收益




// 寻找两个字符串的最长公共子串
function findMaxSub(str1, str2) {
  
}
// console.log('findMaxSub', findMaxSub(raven, havoc))



/**
 * 树的广度遍历算法
 */
const bfsTree = (tree, fn) => {
  let tempTree = [ tree ].slice()
  while (tempTree.length) {
    const curNode = tempTree.shift()
    fn && fn(curNode.node)
    if (curNode.children && curNode.children.length) {
      tempTree = tempTree.concat(curNode.children)
    }
    // 二叉树
    /* if (curNode.left) tempTree.push(curNode.left)
    if (curNode.right) tempTree.push(curNode.right) */
  }
}
// bfsTree(tree, log)

/**
 * 树的深度遍历算法
 */
const dfsTree = (tree, fn) => {
  if (!tree) return
  let tempTree = [ tree ].slice()
  while (tempTree.length) {
    const curNode = tempTree.shift()
    fn && fn(curNode.node)
    if (curNode.children && curNode.children.length) {
      tempTree = curNode.children.concat(tempTree)
    }
    // 二叉树
    // if (curNode.right) tempTree.unshift(curNode.right)
    // if (curNode.left) tempTree.unshift(curNode.left)
  }
}
// dfsTree(tree, log)

const dfsTreeCur = (tree, fn = log) => {
  if (!tree) return
  fn(tree.node)
  dfsTreeCur(tree.left)
  dfsTreeCur(tree.right)
}
// dfsTreeCur(binaryTree)
