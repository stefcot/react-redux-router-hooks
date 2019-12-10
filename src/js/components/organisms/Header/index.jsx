import React from 'react';
import PropTypes from 'prop-types';

import PreHeader from 'molecules/PreHeader';
import Logo from 'atoms/Logo';
import Categories from 'molecules/Categories';

const styles = require('./Header.skin');

console.log('Header - scss: ', styles);

const Header = ({ page, preHeader, categories }) => (
  <header className={styles['root']} id={`hdr-cmp-${page}`}>
    <PreHeader name={`preheader-nav-cmp-${page}`} {...preHeader} />
    <Logo />
    <Categories name={`cat-nav-cmp-${page}`} {...categories} />
  </header>
);

Header.defaultProps = {
  page: ''
};

Header.propTypes = {
  categories: PropTypes.object.isRequired,
  page: PropTypes.string,
  preHeader: PropTypes.object.isRequired
};

export default Header;
