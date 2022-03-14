const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    client: "./client/client.jsx",
  },
  output: {
    filename: "[name].js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".jpg", ",png"],
  },
  /** can module be omitted for a simple project? No, it cannot. */
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.(jpe?g|png|gif|svg)$/i],
        exclude: /(node_modules)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
};
