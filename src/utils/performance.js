/**
 * 白屏时间
 * 首屏时间
 * 
 * navigationStart 上一个页面unload ，此页面准备加载页面的起始时间
 * domloading 当前网页DOM结构开始解析时间 Document.readyState=loading
 * domInteractive 网页Dom结构结束解析，开始加载内嵌资源时间
 * loadEventEnd load事件结束
 */
const time = performance.timing

// 白屏时间: 开始解析bosy的事件点
// 1. 在header末尾插入script
// 2. 使用domLoading
const whiteScreen = time.domloading - time.navigationStart

// 首屏时间：首屏内容渲染结束时间点 - 开始请求时间
// 1. 在相应的首屏Dom结构之后插入script
// 2. 统计首屏内加载最慢的图片的时间
// 3. 只考虑首屏的主要模块

// 可交互时间：可相应事件时间点 - 开始时间
const interactiveTime = time.domInteractive

// 