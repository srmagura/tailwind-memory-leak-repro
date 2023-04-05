const path = require("node:path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: path.resolve(__dirname, "src/main.js"),
  },
  resolve: {
    modules: [path.resolve(__dirname, "src")],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: require.resolve("css-loader"),
            options: {
              sourceMap: true,
              importLoaders: 1,
              modules: {
                auto: /\.module\.css/,
                mode: "local",
              },
            },
          },
          {
            loader: require.resolve("postcss-loader"),
          },
        ],
      },
    ],
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new MiniCssExtractPlugin()],
};
