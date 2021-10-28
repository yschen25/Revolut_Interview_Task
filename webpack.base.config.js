const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HappyPack = require("happypack");
const happyThreadPool = HappyPack.ThreadPool({ size: 5 });

module.exports = {
  entry: ["./src/main.tsx"],
  output: {
    path: `${__dirname}/dist`,
    filename: "assets/js/bundle.[hash].js",
    publicPath: "/",
  },
  module: {
    rules: [
      // changed from { test: /\.jsx?$/, use: { loader: 'babel-loader' }, exclude: /node_modules/ },
      {
        test: /\.(t|j)sx?$/,
        use: { loader: "ts-loader" },
        exclude: /node_modules/,
      },

      // addition - add source-map support
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "source-map-loader",
      },

      {
        test: /\.(gif|jpg|png|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "./assets/images",
              name: "i.[hash].[ext]",
              publicPath: "/assets/images",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
      filename: "index.html",
      inject: "body",
    }),
    // // Multiple threads
    // new HappyPack({
    //   id: "babel",
    //   threadPool: happyThreadPool,
    //   loaders: ["babel-loader?cacheDirectory"],
    // }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    modules: [path.resolve("./node_modules")],
  },
//   optimization: {
//     runtimeChunk: {
//       name: "m",
//     },
//     splitChunks: {
//       cacheGroups: {
//         commons: {
//           test: /[\\/]node_modules[\\/]/,
//           name: "v",
//           chunks: "all",
//         },
//       },
//     },
//   },
  externals: {
    // react: "React",
    // "react-dom": "ReactDOM",
  },
  // addition - add source-map support
  devtool: "source-map",
};
