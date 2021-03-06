// 使用node的path模块
const baseConfig
const webpack = require('webpack')
module.exports = {
    mode:'development',
    // 打包的入口
    entry:'./src/main.js',
    devtool:'cheap-module-eval-source-map',
    devServer:{
        contentBase:'./dist',
        open:true,
        hot:true
    },
    // 打包的出口
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'dist')
    },
    // 打包规则
    module:{
        rules:[{
            test:/\.vue$/,
            loader:'vue-loader'
        },
        {
            test:/\.(jpg|jpeg|png|svg)$/,
            loader:'file-loader',
            options:{
                name:'[name].[ext]',
                limit:2048
            }
        },
        {
            test:/\.css$/,
            use:['style-loader','css-loader']
        },
        {
            test:/\.styl(us)?$/,
            use:['vue-style-loader','css-loader','postcss-loader','stylus-loader']
        }
    ]
    },
    plugins:[
        //   确保引入这个插件
            new VueLoaderPlugin(),
            new HtmlWebpackPlugin({
                template:'./index.html'
            }),
            new CleanWebpackPlugin(),
            new webpack.HotModuleReplacementPlugin()
        ],

    resolve:{
        alias:{
            'vue':'vue/dist/vue.js'
        }
    }
}