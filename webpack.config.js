const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const configFile = require('./config.json');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: '!!handlebars-loader!src/index.hbs',
            meta: configFile.meta,
            templateParameters: {
                config: configFile.custom
            },
        }),
        new CopyPlugin({
            patterns: [{
                from: "src/img",
                to: "img"
            }, {
                from: "src/fonts",
                to: "fonts"
            }],
        }),
        new FaviconsWebpackPlugin({
            logo: './src/img/brand.svg',
            favicons: {
                theme_color: '#0b0a15',
            }
        }),
    ],
    module: {
        rules: [{
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.svg$/,
                use: 'file-loader'
            },
            {
                test: /\.(jpg|png)$/,
                use: 'file-loader'
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }
        ]
    }
};

module.exports = config;