// Object.defineProperty
const person = {
  name: 'yun',
  age: 18
}

let initValue = 'test'
Object.defineProperty(person, 'name', {
  get: function () {
    console.log('get', initValue, this)
    return initValue
  },
  set: function (value) {
    console.log('set', value)
    initValue = value
  }
})

/* const a = person.name
person.name = 'baby' */

// Proxy
// 要使得Proxy起作用，必须针对Proxy实例（上例是proxy对象）进行操作，而不是针对目标对象进行操作
const woman = { name: 'woman', age: 18 }
const proxy = new Proxy(woman, {
  get: (target, key, receiver) => {
    console.log('Proxy get',target, key, receiver)
    // return Reflect.get(target, key, receiver)
    return target[key]
  },
  set: (target, key, value, receiver) => {
    console.log('Proxy set', target, key, value, receiver)
    // return Reflect.set(target, key, value, receiver)
    target[key] = value
    return true
  }
})
console.log( proxy.name)
woman.name = 'lady'
console.log(woman.name, proxy.name)

