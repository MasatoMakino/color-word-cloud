module.exports = {
  entry: "./task/index.js",
  output: {
    path: `${__dirname}/lib`,
    filename: "bundle.js"
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      node: true
                    }
                  }
                ]
              ]
            }
          }
        ]
      }
    ]
  }
};
