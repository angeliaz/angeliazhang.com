function add(x) {
  return function (y) {
    return x + y
  }
}

const add5 = add(5)
const add10 = add(10)

console.log(add(5)(2))
console.log(add(10)(2))

const nodes = document.querySelectorAll('div')

for (var i = 0; i < nodes.length; i++) {
  nodes[i].onclick = function () {
    console.log(i)
  }
}

// bind apply bind
function fn() {
  console.log('this', this);
}
fn.call(null)
// fn.call(undefined)

let fn1 = fn.bind(window)
fn1(null)

// 闭包内实现函数计数
// function counter() {
//   let count = 0;
//   return function () {
//     console.log('count', count++)
//     return count
//   }()
// }
const request = (key) => {
  // console.log(40, key)
  return key + '-test'
}

const memorize = (() => {
  const obj = {}
  return function () {
    const [key, value] = [].slice.call(arguments)
    if (obj[key]) {
      return obj[key]
    } else {
      obj[key] = request(key)
      return obj[key]
    }
  }
})()

memorize(1)
memorize(2)
memorize(3)
memorize(2, 1)
memorize(2)
memorize(3)

function addFn(x) {
  return x + 4
}

function multi(x) {
  return x * 4
}

// function compose(f, g) {
//   return function (x) {
//     return f(g(x))
//   }
// }

function compose(...args) {
  return (result) => {
    return args.reduceRight((result, fn) => {
      return fn(result)
    }, result)
  }
}

console.log('compose', compose(multi, addFn)(2))

// 函数柯里化
function currying(fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args)
  }
  return function (...args2) {
    return currying(fn, ...args, ...args2)
  }
}
function add2(a, b, c, d) {
  return a + b + c + d
}
const preAdd = currying(add2)(1)(2)(3)
console.log(1, preAdd(4) )
// function addAndMult(x) {
//   return function (y) {
//     return x * y
//   }
// }



// var addCurry = createCurry(function (a, b, c) {
//   return a + b + c;
// });

// console.log('addCurry', addCurry(1)(2)(3));  // 6

