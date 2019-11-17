/**
 * SET
 */
const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
items.size // 5

// 例三
const set = new Set(document.querySelectorAll('div'));
set.size;

// 
const unique1 = [...new Set(str.replace(/\s/g, ''))].join('')

// 向 Set 加入值的时候，不会发生类型转换
new Set([5, '5', NaN, NaN]);

// 两个对象总是不相等的。
new Set([5, '5', NaN, NaN, {}, {}]);


let arr = [3, 5, 2, 2, 5, 5];
let unique = [...new Set(arr)];

let set = new Set([1, 2, 3, 4, 5]);
set = new Set([...set].filter(x => (x % 2) == 0));

let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// 差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}

/**
 * Map
 * js 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键
 * Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应
 */



// Map / 数组 互转
[...myMap]

new Map([
  [true, 7],
  [{foo: 3}, ['abc']]
])

// 对象转为 Map
Map.set()

