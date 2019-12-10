import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const config = require('../assets/json/Page');

ReactDOM.render(<App {...config} />, document.getElementById('root'));

if (process.env.isProduction) {
  console.log('production');
}

if (!process.env.isProduction) {
  console.log('development');
}

if (!process.env.isProduction && module.hot) {
  module.hot.accept();
}
