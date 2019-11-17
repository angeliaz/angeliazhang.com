const add = a => b => a + b
console.log(add(1)(2))

const add1 = a => {
  const fn = b => {
    return add1(a + b)
  }
  fn.toString = fn.valueOf = () => {
    return a
  }
  return fn
}

console.log(add1(1)(2)(3)(3))
