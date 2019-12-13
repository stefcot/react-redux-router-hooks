const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
// const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = env => ({
  entry: {
    app: [
      path.resolve(__dirname, '../src/js/index.js')
    ]
  },
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json', '.scss'],
    alias: {
      '@': path.resolve(__dirname, '../src/js'),
      styles: path.resolve(__dirname, '../src/scss/components'),
      components: path.resolve(__dirname, '../src/js/components'),
      atoms: path.resolve(__dirname, '../src/js/components/atoms'),
      molecules: path.resolve(__dirname, '../src/js/components/molecules'),
      organisms: path.resolve(__dirname, '../src/js/components/organisms'),
      templates: path.resolve(__dirname, '../src/js/components/templates'),
      utils: path.resolve(__dirname, '../src/js/utils'),
      images: path.resolve(__dirname, '../src/assets/images'),
      svg: path.resolve(__dirname, '../src/assets/svg'),
      fonts: path.resolve(__dirname, '../src/assets/fonts')
    },
    modules: ['node_modules', path.resolve(__dirname, '../node_modules')]
  },
  module: {
    rules: [
      {
        test: /\.js(x*)$/,
        use: ['babel-loader'],
        exclude: path.resolve(__dirname, '../node_modules/')
      },
      {
        test: /\.js$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: path.resolve(__dirname, '../node_modules/')
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
        exclude: path.resolve(__dirname, '../node_modules/')
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/images/[name].[hash:6].[ext]'
            }
          }
        ],
        exclude: path.resolve(__dirname, '../node_modules/')
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/fonts/[name].[ext]'
            }
          }
        ],
        include: [path.resolve(__dirname, '../src/assets/fonts/')]
      },
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/fonts/[name].[ext]'
            }
          },
          {
            loader: 'svg-loader',
            options: {
              name: 'assets/fonts/[name].[ext]'
            }
          }
        ],
        include: [path.resolve(__dirname, '../src/assets/fonts/')]
      },
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: 'raw-loader',
            options: {
              name: 'assets/images/svg/[name].[ext]'
            }
          },
          {
            loader: 'svgo-loader'
          }
        ],
        include: [path.resolve(__dirname, '../src/assets/svg/')]
      },
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/images/svg/[name].[ext]'
            }
          }
        ],
        include: [path.resolve(__dirname, '../src/assets/images/')]
      }
    ]
  },
  plugins: [
    // Built-in Plugins
    // The EnvironmentPlugin is shorthand for using the DefinePlugin on process.env keys.
    // You could then reference the NODE_ENV environment variable in your code:
    // var env = process.env.NODE_ENV;
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'dev',
      isProduction: env === 'production'
    }),
    // Make some libraries and/or modules global
    new webpack.ProvidePlugin({
      _: 'lodash'
    }),
    // Copy static contents not processed in config
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../src/assets/fonts'),
        to: path.resolve(__dirname, '../dist/assets/fonts')
      },
      {
        from: path.resolve(__dirname, '../src/assets/images/icons'),
        to: path.resolve(__dirname, '../dist/assets/images/icons')
      },
      {
        from: path.resolve(__dirname, '../src/assets/images/'),
        to: path.resolve(__dirname, '../dist/assets/images/')
      }
    ]),
    // Loads a EJS template
    new HtmlWebpackPlugin({
      title: 'Project Sandbox: React, Redux, React-router, Jest',
      inject: false,
      appMountId: 'root',
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/templates/index.ejs'),
      headHtmlSnippet: `
        <!-- FAVICON -->
        <link rel="shortcut icon" href="assets/images/icons/favicon.ico" type="image/x-icon">
        <link rel="icon" href="assets/images/icons/favicon.png" type="image/png">
        <link rel="icon" sizes="32x32" href="assets/images/icons/favicon-32.png" type="image/png">
        <link rel="icon" sizes="64x64" href="assets/images/icons/favicon-64.png" type="image/png">
        <link rel="icon" sizes="96x96" href="assets/images/icons/favicon-96.png" type="image/png">
        <link rel="icon" sizes="196x196" href="assets/images/icons/favicon-196.png" type="image/png">
        <link rel="apple-touch-icon" sizes="152x152" href="assets/images/icons/apple-touch-icon.png">
        <link rel="apple-touch-icon" sizes="60x60" href="assets/images/icons/apple-touch-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="76x76" href="assets/images/icons/apple-touch-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="assets/images/icons/apple-touch-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="assets/images/icons/apple-touch-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="assets/images/icons/apple-touch-icon-144x144.png">
        <meta name="msapplication-TileImage" content="assets/images/icons/favicon-144.png">
        <meta name="msapplication-TileColor" content="#FFFFFF">`
    }),
    new InlineManifestWebpackPlugin()
    // Lint scss files on save, triggers a live reload
    // new StyleLintPlugin({
    //   configFile: path.resolve(__dirname, '../.stylelintrc'),
    //   fix: true,
    //   context: path.resolve(__dirname, '../src'),
    //   failOnError: false
    // })
  ],
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    }
  },
  devtool: env === 'production' ? 'source-map' : 'cheap-module-eval-source-map',
  mode: env === 'production' ? 'production' : 'development'
});
