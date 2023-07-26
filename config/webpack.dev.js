const path = require("path");
const {merge} = require("webpack-merge");

const common = require("./webpack.common");

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        static: path.resolve(__dirname, 'dist'), // Корневая директория для dev-сервера
        port: 3000, // Порт для запуска dev-сервера
        hot: true,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Обработка CSS файлов
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [],
})