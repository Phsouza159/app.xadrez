const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry : {
        filename: './web/TypeScript/main.ts'
    } , 
    output : {
        path: path.resolve(__dirname , './web/assets/js/build/'),
        filename: 'main.build.js',
    },
    module : {
        rules: [
            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                loader:'ts-loader',
               
            }
        ]
    }
}
//loader: 'babel-loader',
// query: {
//                    presets: [
//                        ['es2015' , {modules: false}]
//                    ]
//                }