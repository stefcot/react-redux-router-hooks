const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [
    // Creates a CSS file from content processed by css-loader ( can be sass-loader + postcss-loader )
    new MiniCssExtractPlugin({
      chunkFilename: 'main.css'
    }),
    // Minifies CSS files
    new OptimizeCssAssetsPlugin(),
    // exports stats on a static HTML page
    new WebpackBundleAnalyzer({
      analyzerMode: 'static'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: ['./src/scss']
            }
          }
        ],
        exclude: '/node_modules/'
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    },
    minimizer: [
      // Minifies JS files
      new UglifyJsWebpackPlugin({
        sourceMap: true
      })
    ]
  }
};
