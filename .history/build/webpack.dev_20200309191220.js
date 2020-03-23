// 使用node的path模块
const baseConfig = require('./webpack.base.js')
const webpack = require('webpack')
const merge = require('webpack-merge')
const devConfig = {
    mode:'development',

    devtool:'cheap-module-eval-source-map',
    devServer:{
        contentBase:'./dist',
        open:true,
        hot:true
    },
    
    plugins:[
            new webpack.HotModuleReplacementPlugin()
        ],
}
module.exports = merge(baseConfig,devConfig)