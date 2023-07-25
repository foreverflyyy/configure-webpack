const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = "development";
if(process.env.NODE_ENV === "production"){
    mode = "production";
}

const plugins = [
    new HtmlWebpackPlugin({
        template: './src/index.html', // Будет использован как шаблон
    }),
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
    }),
]

module.exports = {
    mode,
    plugins,
    entry: "./src/index.js",
    devtool: 'source-map',
    devServer: {
        hot: true, // Автоматическая перезагрузка страницы при изменениях
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
        ]
    }
}