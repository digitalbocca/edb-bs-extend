const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: {
    index: './src/js/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], { root: path.resolve(__dirname, '..'), verbose: true }),
    new UglifyJsPlugin()
  ],
  output: {
    filename: 'edb-bs-extend.js',
    path: path.resolve(__dirname, '../dist/js'),
    library: 'BsExtend',
    libraryTarget: 'umd'
  }
}
