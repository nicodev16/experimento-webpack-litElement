const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    'cards-element': "./src/cards-element.js",
    'getData': './src/getData.js'
  },
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      title: "LitElement and webpack experimento",
    }),
  ],
  module: {
      rules: [
          {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
          }
      ]
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
