import React from 'react';
import PropTypes from 'prop-types';

const LifeStyle = ({ index }) => <div id={`lfstl-cmp-${index}`}>LifeStyle</div>;

LifeStyle.defaultProps = {
  index: 0
};

LifeStyle.propTypes = {
  index: PropTypes.number
};

export default LifeStyle;
