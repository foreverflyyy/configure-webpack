const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = "development";
if(process.env.NODE_ENV === "production"){
    mode = "production";
}

const plugins = [
    new HtmlWebpackPlugin({
        template: './index.html', // Будет использован как шаблон
    }),
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
    }),
]

module.exports = {
    mode,
    plugins,
    context: path.resolve(__dirname, "src"),
    entry: "./index.js",
    devtool: 'source-map',
    devServer: {
        // Автоматическая перезагрузка страницы при изменениях
        hot: true,
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "assets/[hash][ext][query]",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: ['html-loader']
            },
            {
                test: /\.(s[ac]|c)ss$/i, // /\.(le|c)ss$/i если less
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                // В продакшен режиме изображения размером до 8кб будут инлайнится в код
                // В режиме разработки все изображения будут помещаться в dist/assets
                test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                type: mode === 'production' ? 'asset' : 'asset/resource',
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, // не обрабатываем файлы из node_modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        // Использование кэша для избежания рекомпиляции при каждом запуске
                        cacheDirectory: true,
                    },
                },
            },
        ]
    }
}