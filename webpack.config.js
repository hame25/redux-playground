module.exports = {
  entry: [
    './todo/index.js'
  ],
  output: {
    filename: "bundle.js",
    path: __dirname + '/public'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  }
};
