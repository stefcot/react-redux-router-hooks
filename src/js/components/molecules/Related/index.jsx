import React from 'react';
import PropTypes from 'prop-types';
import { Parser } from 'html-to-react';
import classNames from 'classnames';
import { IconFactory, IconList } from '../../../utils/IconFactory';

const htmlToReactParser = new Parser();
const styles = require('./Related.skin');

// console.log('Related - scss: ', styles);

const Related = ({ list }) => (
  <ul className={styles['root']}>
    {list.map(item => {
      const classes = classNames(styles['icon'], 'icon-plus', {
        [styles['premium']]: item.isPremium === true
      });
      const randomId = Math.round(Math.random() * 100000);

      return (
        <li key={randomId} className={styles['item']}>
          <a href={item.contentPath} className={styles['link']}>
            <i className={classes}>{IconFactory(IconList['plus'])}</i>
            {htmlToReactParser.parse(item.title)}
          </a>
        </li>
      );
    })}
  </ul>
);

Related.defaultProps = {
  list: () => []
};

Related.propTypes = {
  list: PropTypes.array
};

export default Related;
