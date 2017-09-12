module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "./dist/bundle.js"
  },
//   devtool: "source-map",
  devtool: 'inline-source-map',
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      // All .ts(x) files will be piped through ts-loader then babel
      {
        test: /\.tsx?$/,
        loader: "babel-loader!ts-loader"
      },
      // All .js(x) files will be piped through babel
      {
        test: /\.jsx?$/,
        loader: "babel-loader"
      }
    ]
  }
};
