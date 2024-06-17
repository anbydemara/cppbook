const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: "/cppbook",
  outputDir: 'cppbook',
  transpileDependencies: true,
  devServer: {
    proxy: {
        '/api': {
            target: 'https://api.qingline.net/',//后端接口地址
            changeOrigin: true,//是否允许跨越
        }
    }
}
})
