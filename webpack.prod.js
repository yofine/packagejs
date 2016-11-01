var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    app: [
      'webpack-hot-middleware/client',
      'babel-polyfill',
      './src/index',
    ],
    vendor: [
      'bootstrap/dist/css/bootstrap.min.css',
      'admin-lte/dist/css/AdminLTE.css',
      'admin-lte/dist/css/skins/_all-skins.min.css',
      'font-awesome/css/font-awesome.min.css',
      'expose?_!lodash',
      'expose?moment!moment',
    ]
  },
  output: {
    path: path.join(__dirname, 'dist', 'assets'),
    filename: "[name].js",
    publicPath: '/assets/'
  },
  resolve:{
    extensions:['', '.js', '.json'],
    modulesDirectories: ['node_modules', './'],
  },
  resolveLoader: {
    root: path.resolve(__dirname, 'node_modules')
  },
  plugins: [
    new HtmlWebpackPlugin({
      files: {
        "css": [ "/assets/[name].[hash].css" ],
        "js": [ "/assets/[name].[hash].js", "/assets/vendor.[hash].js"],
      },
      template: 'index.template.html',
      filename: '../index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new webpack.ProvidePlugin({
      'Promise': 'exports?global.Promise!es6-promise',
      'fetch': 'exports?self.fetch!whatwg-fetch'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("css/[name].css"),
    new webpack.ResolverPlugin([
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("package.json", ["main"]),
    ]),
    new webpack.DefinePlugin({
      ENV: '"dev"',
      'process.env': {
        NODE_ENV: JSON.stringify('dev'),
      }
    }),
  ],
  module: {
    loaders: [
      { test: /\.js?$/,
        include: [path.resolve(__dirname, "src")],
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        loader:  ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader?name=img/[name].[ext]'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=100000&minetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader?name=fonts/[name].[ext]"
      },
      {
        test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader?name=svg/[name].[ext]"
      },
    ]
  }
}
