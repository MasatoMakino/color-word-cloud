module.exports = {
  entry: "./src/index.js",
  output: {
    path: `${__dirname}/docs`,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: ["@babel/plugin-transform-runtime"]
            }
          }
        ]
      }
    ]
  }
};
