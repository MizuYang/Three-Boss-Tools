const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Three-MVP-Back-Time/' //* 儲存庫名稱
    : '/'
})
