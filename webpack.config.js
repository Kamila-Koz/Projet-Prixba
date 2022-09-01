const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry:{
        main: path.resolve(__dirname, 'src/index.js')
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/[name][ext]',
        clean: true
    },
    devServer:{
        static: path.resolve(__dirname, 'dist'),
        port: 5002,
        open: true,
        hot: true,
    },
    module:{
        rules: [
            {test: /\.(css|s[ac]ss)$/, use:['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.(svg|ico|png|webp|gif|jpg)$/, type: 'asset/resource'},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.html')
        }),
        new HtmlWebpackPlugin({
            filename: 'product.html',
            template: path.resolve(__dirname, 'src/product.html')
        }),
        new HtmlWebpackPlugin({
            filename: 'products.html',
            template: path.resolve(__dirname, 'src/products.html')
        })]
}