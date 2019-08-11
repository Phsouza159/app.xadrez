const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        filename: path.resolve(__dirname, './web/TypeScript/main.js'),
    },
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, './web/assets/js/build/'),
        filename: 'main.build.js',
    },
    resolve: {
        extensions: ['.ts' , '.js' , '.json']
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            }
        ]
    },
}
//loader: 'babel-loader',
// query: {
//                    presets: [
//                        ['es2015' , {modules: false}]
//                    ]
//                }