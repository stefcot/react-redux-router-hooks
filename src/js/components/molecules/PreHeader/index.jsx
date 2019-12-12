import React from 'react';
import PropTypes from 'prop-types';

import Links from 'molecules/Links';

const styles = require('./PreHeader.skin');

// console.log('PreHeader - scss: ', styles);

const PreHeader = ({ page, nav }) => (
  <nav
    className={styles['root']}
    id={`prehader-nav-cmp-${page}`}
    aria-labelledby={`prehader-nav-cmp-${page}`}
  >
    <Links name={`preheader-lnks-cmp-${page}`} nav={nav} />
  </nav>
);

PreHeader.defaultProps = {
  page: '',
  nav: []
};

PreHeader.propTypes = {
  nav: PropTypes.array,
  page: PropTypes.string
};

export default PreHeader;
