const path = require('path');

module.exports = {
  entry: './src/hpgl-viewer.js',
  output: {
    filename: 'hpgl-viewer.js',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'demo')
      },
      {
        directory: path.join(__dirname, 'lib'),
        publicPath: '/hpgl-viewer/lib'
      }
    ]
  }
};
