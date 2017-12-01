var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var BabiliPlugin = require("babili-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname,"../dist"),
    publicPath: "/",
    filename: "js/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query:{
          presets:[
            ["es2015"]
          ]
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          use: ["css-loader","sass-loader"],
          fallback: "style-loader"
        })
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: "css-loader",
          fallback: "style-loader"
        })
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
  plugins: [
    new webpack.DefinePlugin({
      "process.pro":{
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name:"vendor",
      filename: "js/vendor.bundle.js"
    }),
    new BabiliPlugin({}),
    new ExtractTextPlugin({
      filename: "css/build.css",
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/template/index.html"
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
