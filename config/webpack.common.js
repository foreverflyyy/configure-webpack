const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[fullhash].bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/, // Расширения файлов, которые должны обрабатываться TypeScript и Babel
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'], // Подключаем Babel пресеты для React и TypeScript
                    },
                },
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(), // Очищаем папку сборки перед каждой новой сборкой
        new HtmlWebpackPlugin({
            template: './public/index.html', // Исходный HTML файл для генерации нового с подключением собранных скриптов
        }),
    ],
};