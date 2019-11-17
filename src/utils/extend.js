// 闭包就是指有权访问另一个函数作用域中的变量的函数
// 创建闭包的常见方式，就是在一个函数内部创建另一个函数。
var name = "The Window";
var object = {
  name : "My Object",
  getNameFunc : function(){
    return function(){
      // return this.name;
    };
  }
};
// alert(object.getNameFunc()()); //"The Window"（在非严格模式下）

class Super {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.foo = 'trest';
  }
  print() {
    console.log('foo', this.foo);
  }
}

class Sub extends Super {
  print() {
    console.log('i am a baby')
  }
}

const sup = new Sub()


// 子类可以直接通过 __proto__ 寻址到父类。
// 而通过 ES5 的方式，Sub.__proto__ === Function.prototype
console.log('class', sup.print(), Sub.__proto__ === Super)

const Subject = (() => {
  const observes = []
  const addOb = ob => {
    observes.push(ob)
  }
  const notify = () => {
    console.log('observes', observes)
    observes.forEach(ob => ob.update())
  }
  return { addOb, notify }
})()
const ob1 = {
  update: () => {
    // console.log('ob1')
  }
}
const ob2 = {
  update: () => {
    // console.log('ob2')
  }
}
Subject.addOb(ob1)
Subject.addOb(ob2)
Subject.notify()

/**
 * 继承
 */
function Parent(name) {
  this.name = name
  this.cars = ['B', 'B', 'A']
}
Parent.prototype.say = function() {
  console.log(this.name)
}

function Child(name, age) {
  Parent.call(this, name)
  this.age = age
}
Child.prototype = new Parent()
Child.prototype.say = function() {
  console.log(this.name, this.age)
}

const m1 = new Child('Bob', 18)
console.log(m1.age, m1.cars)
