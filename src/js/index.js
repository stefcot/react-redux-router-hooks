import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const config = require('../assets/json/Page');

// React aXe will check accessibility inconsistencies
// and report them in the console, alsosuggests solutions to fix problems
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(<App {...config} />, document.getElementById('root'));
