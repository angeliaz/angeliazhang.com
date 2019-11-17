const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
  publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {
        '~': path.join(__dirname, 'src')
      }
    },
    plugins: [
      /* new BundleAnalyzerPlugin({
        analyzerMode: 'disabled',
        generateStatsFile: true,
        statsOptions: { source: false }
      }) */
    ]
  },
  devServer: {
    open: true,
    proxy: {
      '/weather_mini': {
        target: 'http://wthrcdn.etouch.cn',
        changeOrigin: true,
        pathRewrite:{
          '^/weather_mini': 'weather_mini'
        }
      },
      'mecenter': {
        target: 'https://baas.browser.qq.com',
        changeOrigin: true,
        pathRewrite:{
          '^/mecenter': 'mecenter'
        }
      },
      'exshow': {
        target: 'https://exshow.sparta.html5.qq.com',
        changeOrigin: true,
        pathRewrite:{
          '^/exshow': 'api/statistics'
        }
      }
    }
  }
}
