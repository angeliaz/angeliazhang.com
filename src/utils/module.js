/**
 * 模块化开发
 */

// IIFE 自执行函数
(function(glabal, document) {
  return {}
})(window, document)

/**
 * CommonJS 同步模块加载规范 用在nodejs
 * 模块可以多次加载，只有第一次加载的时候运行一次，结果被缓存
 */
const fs = require('fs')
module.exports = function (a, b) {
  return fs(a * b);
}

/**
 * AMD Asynchronous Module Definition 异步模块加载规范
 * 使用requireJS 来编写模块化, 依赖必须提前声明好
 * 依赖的模块 CMD 是延迟执行，而 AMD 是提前执行
 */
// define(id?, dependencies?, factory);
require(['jquery', 'math'], function($, math){
  $("#sum").html(math.add(10, 20))
});

/**
 * CMD Common Module Definition 通用模块加载规范
 * 使用seaJS 来编写模块化, 支持动态引入依赖文件
 * 依赖的模块 CMD 是延迟执行，而 AMD 是提前执行
 * CMD 推崇 as lazy as possible（依赖就近），AMD 推崇依赖前置
 */
define(function(require, exports, module) {  
  var indexCode = require('./index.js');
});

/**
 * UMD Universal Module Definition
 * 提供 AMD 模块接口，CMD 模块接口，CommonJS ，还得提供原生的 JS 接口
 */
;(function(){
  function MyModule() {
    // ...
  }
  var moduleName = MyModule;
  if (typeof module !== 'undefined' && typeof exports === 'object') {
      module.exports = moduleName;
  } else if (typeof define === 'function' && (define.amd || define.cmd)) {
      define(function() { return moduleName; });
  } else {
      this.moduleName = moduleName;
  }
}).call(function() {
  return this || (typeof window !== 'undefined' ? window : global);
});

/**
 * ES6 Modules
 * ES6 引入的模块化，支持import 来引入另一个 js
 * ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量
 * 与commonjs
 *   输出值
 *   加载方式
 */
// <script type="module" src="js/index.js">
import arrayMod from 'array.js';
export function area(radius) {
  return Math.PI * radius * radius;
}
