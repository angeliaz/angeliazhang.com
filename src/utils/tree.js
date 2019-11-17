const treelist =   [{
  id: 1,
  name: '1',
  parentId:  0
}, {
  id: 2,
  name: '1-1',
  parentId: 1
}, {
  id: 3,
  name: '1-1-1',
  parentId: 2
}, {
  id: 4,
  name: '1-2',
  parentId: 1
}, {
  id: 5,
  name: '1-2-2',
  parentId: 4
}, {
  id: 6,
  name: '1-1-1-1',
  parentId: 3
}, {
  id: 7,
  name: '2',
  parentId: 0
}, {
  id: 8,
  name: '8',
  parentId: 7
}]

const demoList = {
  "People": [
      {
          "id": "6",
          "parentId": "12",
          "text": "Boy",
          "level": "2",
          "children": null
      },
      {
        "id": "12",
        "parentId": "0",
        "text": "Man",
        "level": "1",
        "children": null
      },
      {
          "id": "7",
          "parentId": "12",
          "text": "Other",
          "level": "2",
          "children": null
      },
      {
        "id": "13",
        "parentId": "7",
        "text": "Other",
        "level": "2",
        "children": null
       },
      {
          "id": "9",
          "parentId": "0",
          "text": "Woman",
          "level": "1",
          "children": null
      },
      {
          "id": "11",
          "parentId": "9",
          "text": "Girl",
          "level": "2",
          "children": null
      }
  ],
  "Animals": [
      {
          "id": "5",
          "parentId": "0",
          "text": "Dog",
          "level": "1",
          "children": null
      },
      {
          "id": "8",
          "parentId": "5",
          "text": "Puppy",
          "level": "2",
          "children": null
      },
      {
          "id": "10",
          "parentId": "13",
          "text": "Cat",
          "level": "1",
          "children": null
      },
      {
          "id": "14",
          "parentId": "13",
          "text": "Kitten",
          "level": "2",
          "children": null
      },
  ]
}

/**
 * 数组 -> tree
 * 复杂度： Θ(n^2) 
 * 递归：fr segment 将数组转换成对应的树tree
 * arr是剩余的数组， obj是从顶往下逐步递归
 * @param {*} data 
 */
function listToTreeWithRecursive(data) {
  let arr = [...data]
  const tree = (obj, filter) => {
    // arr 每次reduce，把没有parent的节点提出，留下每一次arr中有parent的节点
    [arr, obj.children] = arr.reduce((accu, value) => {
      // 确定value是否存在parent, 无返回true
      // accu: [[有parent], [无parent]]
      if (filter(value)) {
        accu[1].push(value)
      } else {
        accu[0].push(value)
      }
      return accu
    }, [[], []])
    // obj.children :
    //    第一次找出没有parent的所有顶点
    //    以后：给出父节点val, 找出arr（剩余未分组）中所有parentId等于val的，即父节点val的下一级
    obj.children.forEach(val => {
      if (arr.length) {
        tree(val, restObj => restObj.parentId === val.id)
      }
    })
  }

  const trees = {}
  tree(trees, item => arr.findIndex(i => i.id === item.parentId) === -1)
  return trees
}

console.log('listToTreeWithRecursive', listToTreeWithRecursive(treelist))

function listToTree(arr) {
  const map = {}
  const list = []
  arr.forEach((item, index) => {
    map[item.id] = index
    arr[index].children = []
  })
  arr.forEach(item => {
    if (item.parentId) {
      arr[map[item.parentId]].children.push(item)
    } else {
      list.push(item)
    }
  })
  return list
}
const mapTree1 = listToTree(treelist)
console.log('mapTree1', mapTree1)


// fr: stackoverflow(https://stackoverflow.com/questions/18017869/build-tree-array-from-flat-array-in-javascript)
function list_to_tree(list) {
  var map = {}, node, roots = [], i;
  for (i = 0; i < list.length; i += 1) {
      map[list[i].id] = i; // initialize the map
      list[i].children = []; // initialize the children
  }
  for (i = 0; i < list.length; i += 1) {
    node = list[i];
    if (node.parentId && node.parentId !== '0') {
      // if you have dangling branches check that map[node.parentId] exists
      list[map[node.parentId]].children.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;
}

/**
 * 数组 -> tree
 * 复杂度：Θ(n log(n))
 * map查找: fr stackoverflow(https://stackoverflow.com/questions/18017869/build-tree-array-from-flat-array-in-javascript)
 */
function listToTreeWithMap(list) {
  const map = {}, roots = [];
  list.forEach((item, i) => {
    map[item.id] = i;
    list[i].children = [];
  });
  list.forEach((item) => {
    if (item.parentId && item.parentId !== '0') {
      list[map[item.parentId]].children.push(item)
    } else {
      roots.push(item)
    }
  })
  return roots
}

const mapTree = listToTreeWithMap(treelist)
console.log('listToTreeWithMap', treelist, mapTree.length)


function dfs(tree, action) {
  let tempStack = tree
  while (tempStack.length) {
    const curNode = tempStack.shift()
    action(curNode)
    if (curNode.children.length) {
      tempStack = curNode.children.concat(tempStack)
    }
  }
}



/**
 * tree -> list
 * 深度优先
 */
function dfsWithRecursive(tree) {
  const result = []
  const getList = (data) => {
    data.forEach(item => {
      const newItem = Object.assign({}, item)
      // delete newItem.children
      result.push(newItem)
      if (item.children && item.children.length) {
        getList(item.children)
      }
    })
  }
  getList(tree)
  return result
}
console.log('dfsWithRecursive', dfsWithRecursive(mapTree))

/**
 * 深度右边，非递归
 */
function dfsWithNoRecursive(tree, action) {
  let tempStack = tree.slice()
  while(tempStack.length) {
    const curNode = tempStack.shift()
    action(curNode)

    if (curNode.children.length) {
      tempStack = curNode.children.concat(tempStack)
    }
  }
}
const fdsNodes = []
dfsWithNoRecursive(mapTree, [].push.bind(fdsNodes))
console.log('dfsWithNoRecursive', mapTree, fdsNodes)

/**
 * 广度优先
 */
function bfsWithNoRecursive(tree, action) {
  let tempStack = tree.slice()
  while (tempStack.length) {
    const curNode = tempStack.shift()
    action && action(curNode)

    if (curNode.children.length) {
      tempStack = tempStack.concat(curNode.children)
    }
  }
}
const bdsNodes = []
bfsWithNoRecursive(mapTree, console.log)
console.log('bfsWithNoRecursive', mapTree, bdsNodes)

/**
 * 广度优先
 */
function treeToListWidthFirst(tree, action) {
  let tempStack = tree.slice()
  while (tempStack.length) {
    const curNode = tempStack.shift()
    action && action(curNode)

    if (curNode.children.length) {
      tempStack = tempStack.concat(curNode.children)
    }
  }
}
console.log('treeList', treeToListWidthFirst(mapTree, console.log))
