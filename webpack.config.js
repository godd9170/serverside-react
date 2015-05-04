var path = require('path');
var pwd = path.resolve(__dirname); // jshint ignore:line

module.exports = {
  entry: {
    'app': 'App.jsx',
  },
  output: {
    path: './build',
    filename: '[name].entry.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'jsx-loader?harmony' },
      { test: /\.css$/, loaders: ['style', 'css'] },
      { test: /\.scss$/, loader: 'style!css!sass' }
    ]
  },
  resolve: {
    alias: {
      app: pwd + '/app',
    },
    extensions: ['', '.js', '.jsx', '.json']
  }
};
