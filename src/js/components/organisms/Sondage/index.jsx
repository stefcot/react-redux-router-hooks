import React from 'react';
import PropTypes from 'prop-types';

const Index = ({ index }) => <div id={`sondage-cmp-${index}`}>Sondage</div>;

Index.defaultProps = {
  index: 0
};

Index.propTypes = {
  index: PropTypes.number
};

export default Index;
