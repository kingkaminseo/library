const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// vue.config.js
module.exports = {
  devServer: {
    host: '0.0.0.0', // 모든 네트워크 인터페이스에서 접근 가능
    port: 8080, // 원하는 포트 설정
    allowedHosts: 'all', // 모든 호스트를 허용 (혹은 필요한 호스트만 설정)
    historyApiFallback: true, // SPA를 위한 설정
  }
}

