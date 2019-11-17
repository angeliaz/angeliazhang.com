## Vue

### nextTick

- 修改数据之后，下次DOM更新结束之后执行回调，回调中可获取最新的DOM

### 统计白屏时间和首屏时间

- 白屏
  - performance.timing.domLoading - performance.timing.navigationStart
  
- 首屏
  - 静态内容
    - 内容标签之后获取时间就行
  - 动态 + 图片渲染完成
    - 图片onload
  - 动态 + 可交互
    - performance.timing.domInteractive - performance.timing.navigationStart

