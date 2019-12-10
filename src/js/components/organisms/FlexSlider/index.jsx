import React from 'react';
import PropTypes from 'prop-types';

const FlexSlider = ({ index }) => <div id={`flx-cmp-${index}`}>FlexSlider</div>;

FlexSlider.propTypes = {
  index: PropTypes.number.isRequired
};

export default FlexSlider;
