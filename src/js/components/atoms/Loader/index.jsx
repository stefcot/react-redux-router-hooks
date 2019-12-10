import React from 'react';
import PropTypes from 'prop-types';

const styles = require('./Loader.skin');

console.log('Loader - scss: ', styles);

const Loader = ({ type, index }) => (
  <div
    className={`${styles['css-spinner']} ${styles.clickable}`}
    id={`ldr-cmp-${index}`}
  >
    <div className={styles['lds-dual-ring']}>
      <div className={styles['lds-anim-obj']} />
    </div>
    <div className={styles['name']}>{`LOADING: ${type}`}</div>
  </div>
);

Loader.defaultProps = {
  index: 0,
  type: 'loader'
};

Loader.propTypes = {
  index: PropTypes.number,
  type: PropTypes.string
};

export default Loader;
