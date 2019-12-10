import React from 'react';
import PropTypes from 'prop-types';

const styles = require('./BannerSlot.skin');

const BannerSlot = ({ name, children }) => (
  <div className={styles['root']} id={name}>
    {typeof children === 'undefined' && (
      <span>You didn&apos;t add any banner in this slot.</span>
    )}
    {children}
  </div>
);

BannerSlot.defaultProps = {
  children: [],
  name: 'default banner name'
};

BannerSlot.propTypes = {
  children: PropTypes.array,
  name: PropTypes.string
};

export default BannerSlot;
