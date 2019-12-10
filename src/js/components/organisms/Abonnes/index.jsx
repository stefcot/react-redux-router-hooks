import React from 'react';
import PropTypes from 'prop-types';

const Abonnes = ({ index }) => <div id={index}>Abonnes</div>;

Abonnes.defaultProps = {
  index: 0
};

Abonnes.propTypes = {
  index: PropTypes.number
};

export default Abonnes;
