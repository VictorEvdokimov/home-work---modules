const {resolve} = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fileLoader = require('file-loader');

module.exports = {                  
    entry: './src/index.js',         
    output: {
        path: resolve(__dirname, "build"),
        filename: 'main.[contenthash].js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.mp3$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        })
        
    ]
};