const path = require('path'); //подключаем path к конфигу вебпака

module.exports = {
  entry: {main: './src/index.js'},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
      publicPath: ''
  },
  mode: 'development', //Режим разработчика
  devServer: {
    static: path.resolve(__dirname, './dist'), //Путь куда смотрит режим разработчика
    compress: true,
    port: 8080,
    open: true,

  }
}