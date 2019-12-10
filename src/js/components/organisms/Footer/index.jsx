import React from 'react';
import PropTypes from 'prop-types';
import Links from 'molecules/Links';

const styles = require('./Footer.skin');

console.log('Footer - scss: ', styles);

const Footer = ({ name }) => (
  <footer className={styles['root']} id={name}>
    <Links name={`ftr-nav-cmp-${name}`} />
  </footer>
);

Footer.defaultProps = {
  name: ''
};

Footer.propTypes = {
  name: PropTypes.string
};

export default Footer;
