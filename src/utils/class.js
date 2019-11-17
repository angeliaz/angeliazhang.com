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

// subscibe
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

// 构造函数继承
function Father(name) {
  // this.test = 'father'
  this.name = name
  this.cars = ['b', 'm']
}
Father.prototype.test = 'father pro'
Father.prototype.sayHi = function () { console.log(this.name) }
Father.prototype.sayAge = function () { 'father age', console.log(this.age) }

function Son(name) {
  Father.call(this, name)
  // this.test = 'son'
}

// 组合继承
Son.prototype = new Father()
// Son.prototype.test = 'son pro'
Son.prototype.sayAge = function () { console.log(this.age) }

const s1 = new Son('baby')
s1.cars.push('bba')
console.log(s1.cars)
s1.sayHi()
s1.age = 18
s1.sayAge()
console.log(s1.test)

const subsciber = (() => {
  const observers = []
  const addOb = obj => {
    observers.push(obj)
  }
  const notify = () => {
    observers.forEach(item => {
      item.update()
    })
  }
  return { addOb, notify }
})()
const obser1 = {
  update: () => {
    console.log('ob1')
  }
}
const obser2 = {
  update: () => {
    console.log('ob2')
  }
}
subsciber.addOb(obser1)
subsciber.addOb(obser2)
subsciber.notify()

const corp = {}
corp.list = []
corp.on = (type, fn) => {
  if (!corp.list[type]) {
    corp.list[type] = []
  }
  corp.list[type].push(fn)
}
corp.emit = function () {
  const type = [].shift.call(arguments)
  corp.list[type].forEach(fn => {
    fn.apply(this, arguments)
  })
}

corp.on('job', (job, salary) => {
  console.log('job', job, salary)
})
corp.on('job', (job, salary) => {
  console.log('postion', job, salary)
})
corp.on('info', (name, age) => {
  console.log('name', name, age)
})

corp.emit('job', 'front-end', 15000)
corp.emit('job', 'back-end', 13000)
corp.emit('info', 'user', 18)
