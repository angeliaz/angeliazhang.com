
/**
 * 栈： LIFO, 先进后出
 * 队列： FIFO, 先进先出
 *    队列只能在队尾插入元素，在队首删除元素
 */
class Queue {

  constructor() {
    this.items = []
  }

  isEmpty() {
    return this.items.length === 0
  }

  enqueue(item) {
    this.items.push(item)
  }

  dequeue() {
    /* if (this.isEmpty()) {
      return
    } else {
      return this.items.shift()
    } */
    return this.items.shift()
  }

  front() {
    return this.items[0]
  }

  clear() {
    this.items = []
  }

  size() {
    return this.items.length
  }

  print() {
    this.items.forEach((item, index) => {
      console.log(item, index)
    })
  }

}

const q = new Queue()
// q.enqueue('s1')
q.print()
console.log(1, q.dequeue())
