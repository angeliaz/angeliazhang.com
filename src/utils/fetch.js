/**
 * fetch只有在网络错误时才会导致请求不能完成，fetch才会被reject
 * 在400,500不会reject，会被resolve
 *  失败：
 *    status：1001 网络错误 ｜ 504 超时 ｜ 其它参考http状态码
 *  成功：
 *    code： 0
 *          
 * @param {Object} options
 *  credentials
 *    credentials: 'include' 让浏览器发送包含凭据的请求（即使是跨域源)
 *    credentials: 'same-origin' 在请求URL与调用脚本位于同一起源处时发送
 *    credentials: 'omit' 浏览器不在请求中包含凭据
 *  data
 */
function request(options) {
  const config = {
    method: 'GET',
    headers: {
      'Cache-Control': 'max-age=0',
      'Pragma': 'no-cache',
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'x-requested-with': 'fetch',
      body: null,
      credentials: 'include'
    }
  }

  return new Promise((resolve, reject) => {
    let fetchFinished = false
    abortablePromise(fetch(options.url, config), 1000)
      .then(res => {
        fetchFinished = true
        if (res.status !== 200) {
          throw res
        }
        return res.json()
      })
      .then(data => {
        resolve(data)
      }).catch(err => {
        if (err.timeout) {
          fetchFinished = true
        }
        // 网络错误
        if (!fetchFinished) {
          err.status = 1001
          err.statusText = 'Failed to fetch'
        }
        reject(err)
      })
  })
}

function abortablePromise(fetchPromise, timeout) {
  let aboutFn = null
  const abortPromise = new Promise((resolve, reject) => {
    aboutFn = () => {
      reject({
        status: 504,
        statusText: 'abort promise',
        timeout
      })
    }
  })

  const _abortablePromise = Promise.race([
    fetchPromise, abortPromise
  ])

  setTimeout(() => {
    aboutFn()
  }, timeout)
  return _abortablePromise
}

request({
  url: '/weather_mini?city=%E5%8C%97%E4%BA%AC'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log('err', err)
})
