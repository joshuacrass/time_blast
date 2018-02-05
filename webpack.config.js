var webpack = require("webpack");

module.exports = {
  entry: {
    app: ["webpack/hot/dev-server", "./app/entry.js"]
  },

  output: {
    path: "./public",
    filename: "bundle.js",
    publicPath: "http://localhost:8080/"
  },

  devServer: {
    contentBase: "./public",
    publicPath: "http://localhost:8080/"
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["react", "es2015"]
        }
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader" }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(new RegExp("^(fs|ipc)$"))
  ]
};
