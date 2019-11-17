// 链式调用
const obj1 = {
  a: 11,
  add: function () {
    this.a += 1;
    return this;
  }
}

console.log('chain call', obj1.add().add())

function add1(a) {
  return (b) => {
    return (c) => {
      return a + b + c
    }
  }
}

function chainCall(obj) {
  function chain() {
    const fn = arguments[0];
    const methodArgs = [].slice.call(arguments, 1);
    // console.log('chain.obj', chain.obj)
    fn.apply(chain.obj, methodArgs);
    return chain;
  }
  chain.obj = obj;
  return chain;
}

// var c = chainCall({test: 'yun'})(console.log, 1)(console.log, 2);
// console.log(c()) 

const Person = {
  name: 'myname',
  age: 1,
  eat: function (food) {
    this.age++;
    console.log('food', food, this)
    return this;
  },
  drink: function (juice, food) {
    console.log('juice', juice, arguments, [].slice.call(arguments))
    return this
  }
}

const Person1 = function(name, age) {
  this.name = 'person';
  this.age = 18;
  this.eat = function (food) {
    this.age++;
    console.log('food', food, this)
    return this;
  }
  this.drink = function (juice, food) {
    console.log('juice', juice, [].slice.call(arguments))
    return this;
  }
  this.loop = async function (wait, fn) {
    await setTimeout(() => {
      fn()
    }, wait);
    return this;
  }
}

// new Person1('zy', 18).eat('egg').drink('coffee', 'rice');
const fn1 = function() {console.log('test')}
// console.log('person', new Person1('zy', 18).loop(2000, fn1))
// .loop(2000, fn1)


window.test1 = function (str) {
  setTimeout(() => {
    console.log(str)
  }, 1000);
  return window;
}
// console.log('test1(1)', test1(1))
// test1(1).test1(2)

/* async function test2(wait, fn) {
  await setTimeout(() => {
    fn()
  }, wait);
  return window;
} */


// test2(2000, fn1).test2(2000, fn1)

// LazyMan('Tony').sleep(10).eat('lunch')
const LazyMan = function (name) {
  console.log(`hi, ${name}`);
  const cbQueue = [];
  let index = 0;
  const _eat = function (food) {
    console.log(`eat ${food}`)
  }
  this.sleep = function(time) {
    setTimeout(() => {
      setTimeout(() => {
        console.log(`1wait for ${time} seconds`, index, cbQueue)
        const cbs = cbQueue.shift();
        // console.log(`2wait for ${time} seconds`, index, cbQueue, cbs)
        if (cbs) {
          cbs.forEach(cb => cb())
        }
      }, time);
    });
    index++;
    return this;
  }
  this.eat = function(food) {
    cbQueue[index] = cbQueue[index] || []
    cbQueue[index].push(_eat.bind(this, food))
    return this;
  }
  this.sleepFirst = function (time) {
    Promise.resolve().then(() => {
      const cbs = cbQueue.shift();
      setTimeout(() => {
        console.log(`sleep first wait for ${time}`)
        cbs && cbs.forEach(cb => cb())
      }, time);
    })
    return this;
  }
}

const LazyMan1 = function(name) {
  console.log(`hi ${name}`)
  let index = 0;
  let totalTime = 0;
  let isNeedSleep = false;
  const cbQueue = []
  const initTime = new Date()
  const _eat = (food) => console.log(`eat ${food}`)
  this.sleep = function (time) {
    totalTime += time
    setTimeout(() => {
      console.log(`wait for ${time}, ${new Date() - initTime}`)
      const cbs = cbQueue.shift()
      cbs && cbs.forEach(cb => cb())
    }, totalTime);
    if (isNeedSleep) {
      index++;
    }
    isNeedSleep = true; 
    return this
  }
  this.eat = function (food) {
    if (isNeedSleep) {
      cbQueue[index] = cbQueue[index] || []
      cbQueue[index].push(_eat.bind(null, food))
    } else {
      _eat.call(null, food)
    }
    return this
  }
}

// new LazyMan('Tony').sleep(2).eat('lunch')
// new LazyMan('Tony').eat('lunch').sleep(2).eat('dinner')
// new LazyMan1('Jack').eat('fest').sleep(1000).eat('lunch').sleep(1000).eat('supper').sleep(1000).eat('last')
// new LazyMan('Tony').eat('lunch').eat('dinner').sleep(500).eat('after dinner').sleep(2000).eat('junk food').eat('after junk food').sleep(2000).eat('coffee')
// LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food').eat('healthy food')

// 函数式
const testChain = val => a => b => console.log(a, b, val, a * b * val)
testChain(1)(4)(3)
