module.exports = {
  publicPath:  process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  // 输出文件目录
  outputDir: "dist",
  // 静态资源存放的文件夹(相对于ouputDir)
  assetsDir: "static",
  // eslint-loader 是否在保存的时候检查(果断不用，这玩意儿我都没装)
  lintOnSave:false,
  // 我用的only，打包后小些
  runtimeCompiler: false,
  productionSourceMap: true,
  configureWebpack: {
    resolve:{
      alias: {
        'components': 'src/components',
        'assets': 'src/assets',
        'network': 'src/network'
      }
    }
  },
  css: {
    loaderOptions: {
       sass: {
         prependData:`@import "~swiper/swiper.scss";`
         // sass 版本 9 中使用 additionalData 版本 8 中使用 prependData  
        }
    }
  }
}