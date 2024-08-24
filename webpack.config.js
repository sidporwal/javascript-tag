// webpack.config.js
import path from "path";

export default {
  entry: "./src/js/script.js", // The entry point can be a single file or an index.js importing others
  output: {
    path: path.resolve("build"),
    filename: "script.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  mode: "development", // Change to 'production' for minified output
};
