var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, "/dist"),
    publicPath: '/dist/',
    filename: 'js/bundle.js'
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader",options:{sourceMap:true}},
          {loader: "sass-loader",options:{sourceMap:true}}
        ]
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        loader: "file-loader?name=images/[name].[ext]"
      },
      {
        test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
        loader: "file-loader"
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname,"../"),
    port: 9090,
    inline: true,    // 热加载引用
    compress: true   // 所有目录的文件都做gzip压缩和提供为服务
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        NODE_ENV: JSON.stringify("development")
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
