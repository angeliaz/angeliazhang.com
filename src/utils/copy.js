/**
 * 浅拷贝
 */
function shadowCopy(origin) {
  const target = {}
  for (let prop in origin) {
    if (origin.hasOwnProperty(prop)) {
      target[prop] = origin[prop];
    }
  }
  return target;
}

// test demo
const originObj = {
  name: 'zy',
  age: 18,
  language: ['chinese', 'English'],
  interest: {
    'cook': 'fish',
    'economy': 'finance'
  }
}
const shadowObj = shadowCopy(originObj);
console.log(shadowObj === originObj, originObj.age, originObj.interest)

// age的值不变
// language的值被改变了
shadowObj.language[1] = 'japan';
shadowObj.age = 17;
shadowObj.interest['cook'] = 'egg';
console.log(originObj.age, originObj.interest, shadowObj.age, shadowObj.interest)

// Object.assign：浅拷贝
const assignObj = Object.assign({}, originObj);
assignObj.age = 20;
assignObj.interest['cook'] = 'meal';
console.log(originObj.age, shadowObj.interest, assignObj.age, assignObj.interest)

// Array concat&slice 浅拷贝
const originArr = [1, 2, {name: 'test'}]
const concatArr = originArr.concat();
const sliceArr = originArr.slice();
const copyArr = originArr
concatArr[0] = 11
concatArr[2].name = 'new'
sliceArr[0] = 111
sliceArr[2].name = 'new slice'
console.log(originArr, concatArr, sliceArr, copyArr);

/**
 * 1.深拷贝: JSON.parse(JSON.stringify(originObj))
 */
/* const deepCopyObj = JSON.parse(JSON.stringify(originObj));
deepCopyObj.age = 17;
deepCopyObj.interest['cook'] = 'egg';
console.log(originObj.age, originObj.interest, deepCopyObj.age, deepCopyObj.interest) */

// 2. lodash.cloneDeep

/**
 * 3.深拷贝(深度优先)
 */
function deepCopyDFS(origin) {
  let target;
  const getType = (data) => {
    return Object.prototype.toString.call(data).slice(8, -1);
  }
  const type = getType(origin);
  if (type === 'Object') {
    target = {};
  } else if (type === 'Array') {
    target = [];
  } else {
    return target;
  }
  for (let key in origin) {
    const valueType = getType(origin[key])
    if (valueType === 'Object' || valueType === 'Array') {
      target[key] = deepCopyDFS(origin[key])
    } else {
      console.log(key, origin[key])
      target[key] = origin[key];
    }
  }
  return target
}
const deepCloneObj = deepCopyDFS(originObj);
console.log(1, originObj, deepCloneObj.age)
deepCloneObj.age = 16;
deepCloneObj.interest['cook'] = 'everything';
console.log('deepCopy', originObj, deepCloneObj)


function deepCopyBFS(origin) {
  const queue = [];
  const map = new Map();

  const target = getEmpty(origin);
  if (target !== origin) {
    queue.push([origin, target]);
    map.set(origin, target)
  }

  while(queue.length) {
    const [tempOri, tempTar] = queue.shift();
    for (let key in tempOri) {
      // 处理环状
      if (map.get(tempOri[key])){
				tempTar[key] = map.get(tempOri[key]);
				continue;
      }
      
      tempTar[key] = getEmpty(tempOri[key])
      if (tempTar[key] !== tempOri[key]) {
        queue.push([tempOri[key], tempTar[key]]);
        map.set(tempOri[key], tempTar[key])
      }
    }
  }
  return target;
}
const deepCopyBFSObj = deepCopyDFSFrGit(originObj)
deepCopyBFSObj.age = 10;
deepCopyBFSObj.interest.cook = 'deepCopyBFSObj';
console.log('deepCopyBFS', originObj, deepCopyBFSObj);


// 如果是对象/数组，返回一个空的对象/数组，
// 都不是的话直接返回原对象
// 判断返回的对象和原有对象是否相同就可以知道是否需要继续深拷贝
// 处理其他的数据类型的话就在这里加判断
function getEmpty(o){
	if(Object.prototype.toString.call(o) === '[object Object]'){
		return {};
	}
	if(Object.prototype.toString.call(o) === '[object Array]'){
		return [];
  }
	return o;
}

function deepCopyBFSFrGit(origin){
	let queue = [];
	let map = new Map(); // 记录出现过的对象，用于处理环

	let target = getEmpty(origin);
	if (target !== origin){
		queue.push([origin, target]);
		map.set(origin, target);
	}

	while (queue.length) {
		let [ori, tar] = queue.shift();
		for (let key in ori) {
			// 处理环状
			if (map.get(ori[key])){
				tar[key] = map.get(ori[key]);
				continue;
			}

			tar[key] = getEmpty(ori[key]);
			if (tar[key] !== ori[key]) {
				queue.push([ori[key], tar[key]]);
				map.set(ori[key], tar[key]);
			}
		}
	}

	return target;
}

function deepCopyDFSFrGit(origin) {
	let stack = [];
	let map = new Map(); // 记录出现过的对象，用于处理环

	let target = getEmpty(origin);
	if(target !== origin){
		stack.push([origin, target]);
		map.set(origin, target);
	}

	while(stack.length){
		let [ori, tar] = stack.pop();
		for(let key in ori){
			// 处理环状
			if(map.get(ori[key])){
				tar[key] = map.get(ori[key]);
				continue;
			}

			tar[key] = getEmpty(ori[key]);
			if(tar[key] !== ori[key]){
				stack.push([ori[key], tar[key]]);
				map.set(ori[key], tar[key]);
			}
		}
	}

	return target;
}
// const deepCopyDFSFrGitObj = deepCopyDFSFrGit(originObj)
// deepCopyDFSFrGitObj.interest.cook = 'deepCopyDFSFrGitObj'
// console.log('deepCopyDFSFrGit', originObj, deepCopyDFSFrGitObj)
