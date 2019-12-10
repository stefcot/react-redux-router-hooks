import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    const { imgPath, alt, width, height, onImageload, loaded } = this.props;

    return (
      <img
        alt={alt}
        height={height}
        onLoad={onImageload}
        src={`/dist/assets/images/${imgPath}`}
        style={loaded ? {} : { display: 'none' }}
        width={width}
      />
    );
  }
}

Image.defaultProps = {
  alt: null,
  height: null,
  imgPath: undefined,
  loaded: false,
  onImageload: () => {},
  width: null
};

Image.propTypes = {
  alt: PropTypes.string,
  height: PropTypes.number,
  imgPath: PropTypes.string,
  loaded: PropTypes.bool,
  onImageload: PropTypes.func,
  width: PropTypes.number
};

export default Image;
