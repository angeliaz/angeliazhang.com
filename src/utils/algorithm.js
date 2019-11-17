/**
 * 斐波那契数列
 * 1 1 2 3 5 8
 */

// 递归实现
// 时间复杂度为O(2^n)
function fibonacciRecursive(n) {
  if (n < 2) return n
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

console.log('fibonacciRecursive', fibonacciRecursive(5))

// for循环
// 时间复杂度O(n)
function fibonacciFor(n) {
  let prev = 1
  let prevPrev = 0
  let num = prevPrev
  for (let i = 1; i <= n; i++) {
    prevPrev = prev
    prev = num
    num = prevPrev + prev
  }
  return num
}

// memoization是一种将函数执行结果用变量缓存起来的方法
const fibonacciMemoization = (() => {
  let memory = []
  return function(n, t) {
    if (memory[n] !== undefined) {
      return memory[n]
    } else {
      return memory[n] = (n === 0 || n === 1) ? n : (fibonacciMemoization(n - 1) + fibonacciMemoization(n - 2))
    }
  }
})()

const fibonacciMemoization1 = (() => {
  let memory = []
  return function(n) {
    if (n >= 0 && n < 2) {
      return n
    }
    if (!memory[n - 1]) {
      memory[n - 1] = fibonacciMemoization1(n - 1)
    }
    if (!memory[n - 2]) {
      memory[n - 2] = fibonacciMemoization1(n - 2)
    }
    return memory[n] = memory[n - 1] + memory[n - 2]
  }
})()

console.log('fibonacciFor', fibonacciFor(4))
console.log('fibonacciMemoization', fibonacciMemoization(5, 'test'))
console.log('fibonacciMemoization1', fibonacciMemoization1(5, 'test'))

// 动态规划 dp
// 动态规划适用于有重叠子问题和最优子结构性质的问题
// 时间复杂度 O(n)
function fibonacciDp(n) {
  let n1 = 1
  let n2 = 1
  let sum = 0
  for (let i = 1; i <= n; i++) {
    n1 = n2
    n2 = sum
    sum = n2 + n1
  }
  return sum
}
console.log('fibonacciDp', fibonacciDp(5))

// 尾递归
function fibonacciEnd(n, n1, n2) {
  if (n <= 1) {
    return n2
  }
  return fibonacciEnd(n - 1, n2, n1 + n2)
}

/**
 * 爬楼梯
 */
// 1 2 3 5 8
// 递归
function getWays(n) {

  if (n < 1) return 0;
  if (n == 1) return 1;
  if (n == 2) return 2;

  return getWays(n-1) + getWays(n-2); 
}

// DP
function getWaysByDp(n) {
  if (n === 1 || n === 2) return n
  let n1 = 1
  let n2 = 2
  let sum = 0
  for (let i = 3; i <= n; i++) {
    sum = n2 + n1
    n1 = n2
    n2 = sum
  }
  return sum
}

console.log('getWays', getWays(5))
console.log('getWaysByDp', getWaysByDp(5))
