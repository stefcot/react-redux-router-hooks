import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from 'atoms/Image';
import { IconFactory, IconList } from 'utils/IconFactory';

const styles = require('./Figure.skin');

// console.log('Figure - scss: ', styles);

class Figure extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnLoad = this.handleOnLoad.bind(this);
    this.state = {
      loaded: false
    };
  }

  shouldComponentUpdate() {
    return true;
  }

  handleOnLoad() {
    this.setState({
      loaded: true
    });
  }

  render() {
    const {
      index,
      contentPath,
      imgPath,
      alt,
      width,
      height,
      legend,
      isPremium,
      icon
    } = this.props;
    const { loaded } = this.state;

    const classes = classNames(styles['root'], {
      [styles['premium']]: isPremium === true
    });

    return (
      <figure className={classes} id={index}>
        <a className={styles['link']} href={contentPath}>
          <Image
            alt={alt}
            height={height}
            imgPath={imgPath}
            loaded={loaded}
            onImageload={this.handleOnLoad}
            width={width}
          />
          {typeof icon !== 'undefined' && icon !== '' && (
            <i className={styles['icon']}>{IconFactory(IconList[icon])}</i>
          )}
        </a>
        {typeof legend !== 'undefined' && legend !== '' && (
          <figcaption>{legend}</figcaption>
        )}
      </figure>
    );
  }
}

Figure.defaultProps = {
  alt: null,
  contentPath: null,
  height: null,
  icon: undefined,
  imgPath: undefined,
  isPremium: false,
  legend: null,
  width: null
};

Figure.propTypes = {
  alt: PropTypes.string,
  contentPath: PropTypes.string,
  height: PropTypes.number,
  icon: PropTypes.string,
  imgPath: PropTypes.string,
  index: PropTypes.number.isRequired,
  isPremium: PropTypes.bool,
  legend: PropTypes.string,
  width: PropTypes.number
};

export default Figure;
