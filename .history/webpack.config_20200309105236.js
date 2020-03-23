// 使用node的path模块
const path = require('path')

module.exports = {
    // 打包的入口
    entry:'./src/main.js',
    // 打包的出口
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    }
}