const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

// our config config
const config = require('./webpack.config.js')();

// generate a config package with our config
const compiler = webpack(config);

// create a config dev server, feed it with the webpack config file
const server = new WebpackDevServer(compiler, {
  hot: true,
  filename: config.output.filename,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
});

// serve
if (process.env.NODE_ENV !== 'production') {
  server.listen(8080, 'localhost', () => {
    console.log('Server running at http://localhost:8080!');
  });
}
