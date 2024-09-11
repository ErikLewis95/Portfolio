const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development", // atau 'production'
  entry: "./src/index.js", // titik masuk Anda
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    static: path.resolve(__dirname, "dist"),
    compress: true,
    port: 9000,
    open: true,
    hot: true,
  },
  resolve: {
    fallback: {
      util: require.resolve("util/"),
      path: require.resolve("path-browserify"),
      tls: false,
      net: false,
      /*path: false,*/
      http: false,
      https: false,
      stream: false,
      crypto: false,
      /*zlib: require.resolve("browserify-zlib"),
      querystring: require.resolve("querystring-es3"),
      path: require.resolve("path-browserify"),
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      process: require.resolve("process/browser"),
      buffer: require.resolve("buffer"),*/
      fs: false, // fs tidak tersedia di browser
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
    test: /\.svg$/,
    use: [
      {
        loader: ["@svgr/webpack", "url-loader"],
        options: {
          throwIfNamespace: false, // Bypass namespace tags warning
        },
      },
    ],
  },
};
