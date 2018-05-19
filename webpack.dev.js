const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const moment = require('moment');

module.exports = function (options) {
    return {
        entry: "./React/Index.tsx",
        output: {
            publicPath: '/',
            path: __dirname + "/wwwroot",
            sourceMapFilename: "js/bundle.js.map",
            filename: `js/bundle${moment().format("YYYYMMDDHHmmss")}.js`
        },
        devtool: options.sourceMap,
        resolve: {
            extensions: [".ts", ".tsx", ".jsx", ".js"]
        },
        module: {
            rules: [
                {
                    enforce: "pre",
                    test: /\.tsx?$/,
                    loader: "tslint-loader",
                    options: {
                        configFile: "tslint.json",
                        emitErrors: true,
                        failOnHint: true,
                        fix: true
                    }
                },
                { test: /\.tsx?$/, loader: ["awesome-typescript-loader"] },
                { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
                {
                    test: /\.(eot|svg|ttf|woff|woff2)$/,
                    loader: 'file-loader?name=./fonts/[name].[ext]'
                },
                {
                    test: /\.(ico|png|jpg|jpeg)$/,
                    loader: 'file-loader?name=./images/[name].[ext]'
                }
            ]
        },
        devServer: {
            historyApiFallback: true,
            port: options.PORT,
            host: options.HOST,
            disableHostCheck: true,
            contentBase: "./wwwroot/",
        },
        plugins: [
            new webpack.DefinePlugin({
                process: {
                    env: {
                        APP_ENV: JSON.stringify('development'),
                        APP_VERSION: JSON.stringify(options.APP_VERSION)
                    }
                }
            }),
            new HtmlWebpackPlugin({
                title: 'ReactTS',
                template: __dirname + '/wwwroot/index.template.html',
                filename: __dirname + '/wwwroot/index.html'
            })
        ],
    };
}

