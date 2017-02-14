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
            { test: /\.ts$/, loader: 'ts-loader' },
            { test: /\.css$/, loaders: ['style', 'css']},
             { test: /\.gif/, loader: "file-loader?emitFile=false&name=App_Themes/Black/images/[name].[ext]" }, 
             {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,loader: "file-loader?emitFile=false&name=App_Themes/fonts/[name].[ext]"}, 
      {      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,      loader: "file-loader?emitFile=false&name=App_Themes/fonts/[name].[ext]"},
      {      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,      loader: "file-loader?emitFile=false&name=App_Themes/fonts/[name].[ext]"    },
       {      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,      loader: "file-loader?emitFile=false&name=App_Themes/fonts/[name].[ext]"    }, 
       {      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,      loader: "file-loader?emitFile=false&name=App_Themes/fonts/[name].[ext]"    }
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
                from:'src/App_Themes/Black/Images',
                to:"dist/App_Themes/Black/images"
            },
            {
                from:'node_modules/font-awesome/fonts',
                to:"dist/App_Themes/fonts"
            },
            // {
            //     from:'src/fonts',
            //     to:"dist/fonts"
            // },
            {
                from:'src/JS/app/*.html',
                to:"dist/JS/app",
                flatten:true
            },
            {
                from:'src/JS/*.html',
                to:"dist/JS",
                flatten:true
            }
        ])
    ]
}