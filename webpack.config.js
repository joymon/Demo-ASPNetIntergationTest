var webpack = require("webpack");
var CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
module.exports = {
  entry: {
    app: "./src/JS/app/bootstrap.ts",
    vendor: ["angular", "angular-sanitize", "angular-route"]
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".js"]
  },

  optimization: {
    splitChunks: {
      name: true,
      cacheGroups: {
        vendor: {
          test: "dist/vendor.bundle.js",
          name: "vendor",
          chunks: "initial"
        }
      }
    }
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: "ts-loader" },
      { test: /\.css$/, loaders: ["style-loader", "css-loader"] },
      {
        test: /\.gif/,
        loader:
          "file-loader?emitFile=false&name=App_Themes/Black/images/[name].[ext]"
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?emitFile=false&name=App_Themes/fonts/[name].[ext]"
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?emitFile=false&name=App_Themes/fonts/[name].[ext]"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?emitFile=false&name=App_Themes/fonts/[name].[ext]"
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?emitFile=false&name=App_Themes/fonts/[name].[ext]"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?emitFile=false&name=App_Themes/fonts/[name].[ext]"
      }
    ]
  },
  devServer: {
    contentBase: "dist"
  },
  plugins: [
    //new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'dist/vendor.bundle.js'}),
    new CopyWebpackPlugin([
      {
        from: "src/*.html",
        to: ".",
        flatten: true
      },
      {
        from: "src/App_Themes/Black/Images",
        to: "App_Themes/Black/images"
      },
      {
        from: "node_modules/font-awesome/fonts",
        to: "App_Themes/fonts"
      },
      {
        from: "src/JS/app/*.html",
        to: "JS/app",
        flatten: true
      },
      {
        from: "src/JS/*.html",
        to: "JS",
        flatten: true
      },
      {
        from: "src/apps/prayerbook/*.*",
        to:'apps/prayerbook',
        flatten:true
      },
      {
        from: "data/home/*.html",
        to:'data/home',
        flatten:true
      }
    ])
  ]
};
