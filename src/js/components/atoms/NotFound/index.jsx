import React from 'react';
import PropTypes from 'prop-types';

const NotFound = ({ type, index }) => (
  <div
    id={`not-found-cmp-${index}`}
  >{`NotFound: Contenu non trouvé: ${type}`}</div>
);

NotFound.defaultProps = {
  index: '',
  type: ''
};

NotFound.propTypes = {
  index: PropTypes.number,
  type: PropTypes.string
};

export default NotFound;
