const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/js/main.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist/js/")
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test:/\.css$/,
        use:[
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader:'css-loader',
            options: {sourceMap:true}
          }
      ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: "./src/index.html",
      filename: "../index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "../css/style.css"
    })
  ]
};