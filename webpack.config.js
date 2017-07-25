/**
 * Created by beijingweb on 2017/7/25.
 */
module.exports = {
  //devtool: "source-map ",
  devtool: "eval-source-map ", //cheap-module-source-map //source-map //配置生成Source Maps，选择合适的选项
  entry: __dirname + "/app/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  
  module: {//在配置文件里添加JSON loader
    loaders: [
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  },
  
  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true
  }
}
//注：“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。