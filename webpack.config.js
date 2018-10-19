const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { 
          presets: ['env', 'react'],
          plugins: [require('babel-plugin-transform-class-properties')]
        }
       
      },
      {
        test: /\.(s*)css$/,
        exclude: /(node_modules|bower_components)/,
        use: [ 'style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: { extensions: ['*','.mjs', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [ new webpack.HotModuleReplacementPlugin() ]
};