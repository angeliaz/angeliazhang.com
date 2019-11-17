// import { count } from './data'
// require data from './data'

setTimeout(() => {
  console.log('count', count)
}, 1000);

class Dictionary {
  constructor() {
    this.data = {}
  }

  has() {

  }

  set(key, value) {
    this.data[key] = value
  }

  get(key) {
    return this.data[key]
  }

  remove(key) {
    delete this.data[key]
  }

  get size() {
    let size = 0
    for (let key in this.data) {
      if (this.data.hasOwnProperty(key)) {
        size++
      }
    }
    return size
  }

  get keys() {
    return Object.keys(this.data)
  }

  get values() {
    return Object.values(this.data)
  }

}

const dic = new Dictionary()
dic.set('one', 1)
dic.set('two', { a: 1 })
dic.set('three', [1, 2, 3])
console.log(dic.size, dic.keys, dic.values)
console.log(dic.get('three'))
