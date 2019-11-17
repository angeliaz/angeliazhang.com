/**
 * 触发高频事件后n秒内函数只会执行一次，
 * 如果n秒内高频事件再次被触发，则重新计算时间
 * 防抖：每次触发事件时都取消之前的延时调用方法
 */
export function debounce(fn, wait = 300) {
  let timer = null;
  return function() {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, wait);
  }
}

/**
 * 高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率
 * 节流：每次触发事件时都判断当前是否有等待执行的延时函数
 */
export function throttle(fn, wait = 300, immediate) {
  let canRun = true;
  return function() {
    if (!canRun) return;
    canRun = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      canRun = true;
    }, wait);
  }
}

function fn() {
  console.log('this', this);
}
fn.call(null)
// fn.call(undefined)

let fn1 = fn.bind(window)
fn1(null)


export function obj2Params(obj) {
  // TODO 感觉根据现在后端只能接收form data的尿性，isQueryString判断没啥用，后续再看，先给关掉了
  if (typeof obj !== 'object') {
      return null;
  }
  Object.keys(obj).forEach((key) => {
      if (
          typeof obj[key] === 'string' && !obj[key]
          || typeof obj[key] === 'undefined'
          || obj[key] === null
      ) {
          delete obj[key];
      }
      if (typeof obj[key] === 'string' && obj[key] === 'null') {
          obj[key] = '';
      }
  });
  const searchParams = new URLSearchParams();
  // if (!isQueryString) {
  //     Object.keys(obj).forEach(key => {
  //         if (typeof obj[key] === 'object') {
  //             searchParams.append(key, JSON.stringify(obj[key]));
  //         } else {
  //             searchParams.append(key, obj[key]);
  //         }
  //     });
  //     return searchParams;
  // }
  Object.keys(obj).forEach((key) => {
      if (obj[key] instanceof Array) {
          obj[key].forEach((val) => {
              if (typeof val === 'object') {
                  searchParams.append(key, JSON.stringify(val));
              } else {
                  searchParams.append(key, val);
              }
          });
          return;
      }
      if (typeof obj[key] === 'object') {
          searchParams.append(key, encodeURIComponent(JSON.stringify(obj[key])));
      } else {
          searchParams.append(key, encodeURIComponent(obj[key]));
      }
  });
  return searchParams
}
