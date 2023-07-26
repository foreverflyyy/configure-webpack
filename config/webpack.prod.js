const path = require("path");
const {merge} = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(css|scss)$/, // Обработка CSS файлов
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                        },
                    },
                    'sass-loader'
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/[name].[contenthash].css',
            chunkFilename: 'styles/[name].[id].[contenthash].css',
            ignoreOrder: false
        }),
        new HtmlWebpackPlugin({
            template: './public/template.html',
            favicon: './public/favicon.ico',
        })
    ],
})