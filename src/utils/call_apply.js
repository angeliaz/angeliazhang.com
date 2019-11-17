function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.showAge = function() {
  console.log(this.name, this.age)
}

const p = new Person('daisy', 18)
p.showAge()

const Cat = {
  name: 'miao',
  age: 3
}

Person.prototype.showAge.call(Cat)
p.showAge.apply(Cat)
Person.prototype.showAge.bind(Cat)()

// find max
const arr = [34, 5, 3, 6, 54, 6, -67, 5, 7, 6, -8, 687];
console.log(Math.max.apply(Math, arr))
console.log(Math.max.call(Math, 34, 5, 3, 6, 54, 6, 687))

// 转数组
const arrayLike = {
  0: 'qianlong',
  1: 'ziqi',
  2: 'qianduan',
  length: 3
}
const arr1 = Array.prototype.slice.call(arrayLike)
console.log('transfer array', arr1)

// 判断类型
console.log('type', Object.prototype.toString.call([1,2]))

// 继承
function Boy(name, age) {
  Person.apply(this, arguments)
}
function Girl(name, age) {
  Person.call(this, name, age)
}