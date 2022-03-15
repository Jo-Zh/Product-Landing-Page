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
        test: [/\.(jsx?|png|jpg)$/],
        exclude: /(node_modules)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
          // {
          //   loader: "url-loader",
          //   options: {
          //     limit: 8192,
          //   },
          // },
        ],
      },
      // {
      //   test: /\.(png|jpg|jpeg|gif)$/i,
      //   type: "asset/resource",
      // },
    ],
  },
};
