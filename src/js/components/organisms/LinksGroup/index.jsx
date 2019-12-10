import React from 'react';
import PropTypes from 'prop-types';

const LinksGroup = ({ index }) => (
  <div id={`lnk-grp-cmp-${index}`}>LinksGroup</div>
);

LinksGroup.defaultProps = {
  index: 0
};

LinksGroup.propTypes = {
  index: PropTypes.number
};

export default LinksGroup;
