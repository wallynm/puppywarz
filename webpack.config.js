var path = require('path');

module.exports = {
  entry: ['./js/game.js'],
  output: {
    path: path.join(__dirname, 'src'),
    filename: 'app.js',
    libraryTarget: 'var',
    library: 'game'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: path.join(__dirname, 'js'),
        query: {
          plugins: ['transform-runtime'],
        }
    }]
  },
  resolve: {
    alias: {
      "cc-es6": path.resolve(__dirname, 'js/cc-es6.js'),
      "scenes": path.resolve(__dirname, 'js/scenes'),
      "layers": path.resolve(__dirname, 'js/layers'),
      "characters": path.resolve(__dirname, 'js/characters'),
      "resources": path.resolve(__dirname, 'js/resources.js')
    }
  },
  externals: { cc: 'cc', cp: 'cp' }
};
