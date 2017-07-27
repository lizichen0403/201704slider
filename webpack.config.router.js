let path=require('path');
let HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    //打包的入口文件
    entry:path.resolve('src/index.js'),
    //配置输出的目录和文件名
    output:{
        //打包后的文件保存的目录
        path:path.resolve('build'),
        //打包后的文件名
        filename:'bundle.js'
    },
    //配置模块的打包方式
    module:{
        //配置不同类型的文件的加载方式
        rules:[
            {
                test:/\.jsx?$/,//如果加载的模块后缀是js或jsx的话
                use:"babel-loader",//使用babel进行转义
                exclude:/node_modules///为了提高解析速度,需要忽略掉node_modules下的东西
            },
            {
                test:/\.less$/,//处理less文件
                use:["style-loader","css-loader","less-loader"]//使用三个加载器,编译并加载less文件
            },
            {
                test:/\.css$/,//处理css文件
                use:["style-loader","css-loader"]//使用三个加载器,编译并加载css文件
            },
            {
                test:/\.(gif|png|jpg|svg|ttf|woff|woff2|eot)$/,//处理图片文件
                //限定图片大小的分界线,如果图片的体积小于给定的值,此图片会变成base64格式内嵌到网页中,否则会经过重命名后保存到目标路径里,在网页中会得到一个新的url路径
                use:"url-loader?limit=8192"//使用url-loader加载
            }
        ]
    },
    //配置插件
    plugins: [
        //可以以index.html作为模版,并向其中插入打包后的bundle.js文件,然后保存到目标路径下
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}