// 二叉树
export const binaryTree = {
  node: 6,
  left: {
    node: 5, 
    left: { 
      node: 4,
      left: { 
        node: 7 
      }
    }, 
    right: { 
      node: 3 
    }
  },
  right: { 
    node: 2, 
    right: { 
      node: 1 
    } 
  }
}

// 树
export const tree = {
  node: 6,
  children: [
    {
      node: 51,
      children: [
        { 
          node: 41,
          children: [ 
            { node: 31 }
          ]
        }, 
        { 
          node: 42 
        }
      ]
    },
    { 
      node: 52, 
      children: [
        { 
          node: 43 
        } 
      ]
    },
    { 
      node: 53, 
      children: [{ 
        node: 44
      }]
    }
  ]
}


let count = 0

setTimeout(() => {
  count++
  console.log('data count', count)
}, 500)

// export default count

// module.exports = {
//   count: count
// }

