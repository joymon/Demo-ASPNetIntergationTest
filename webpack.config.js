var webpack = require("webpack");
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: {
        app:"./src/JS/app/bootstrap.ts",
        vendor:["angular","angular-sanitize","angular-route"]
    },
    output: {
        filename: "dist/bundle.js"
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
    devServer: {
        contentBase: "dist",
        hot: true
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"dist/vendor.bundle.js"),
        new CopyWebpackPlugin([
            {
                from: 'src/*.html',
                to: 'dist',
                flatten:true
            },
            {
                from:'src/App_Themes',
                to:"dist/App_Themes"
            },
            {
                from:'src/Content',
                to:"dist/Content"
            },
            {
                from:'src/fonts',
                to:"dist/fonts"
            },
            {
                from:'src/JS/app/*.html',
                to:"dist/JS/app",
                flatten:true
            }
        ])
    ]
}