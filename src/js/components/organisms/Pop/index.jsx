import React from 'react';
import PropTypes from 'prop-types';

const Pop = ({ index }) => <div id={`pop-cmp-${index}`}>Pop</div>;

Pop.defaultProps = {
  index: 0
};

Pop.propTypes = {
  index: PropTypes.number
};

export default Pop;
