const p1 = new Promise((resolve, reject) => {
  resolve (1)
  // return 1
}).then(res => {
  console.log('res', res)
  return 2
}).then(res => {
  console.log('res2', res)
  return 3
})
console.log(new Promise((resolve, reject) => {
  resolve(1)
  // return 1
}), p1.then(res => {
  console.log('p1', res)
}))
