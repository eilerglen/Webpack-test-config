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

  },
  module: {
    rules: [ // rules — это массив правил
      // добавим в него объект правил для бабеля
      {
        // регулярное выражение, которое ищет все js файлы
        test: /\.js$/,
        // при обработке этих файлов нужно использовать babel-loader
        use: 'babel-loader',
        // исключает папку node_modules, файлы в ней обрабатывать не нужно
        exclude: '/node_modules/'
      }
      ]
  }
};