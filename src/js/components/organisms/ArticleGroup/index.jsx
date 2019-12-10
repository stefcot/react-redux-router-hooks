import React from 'react';
import PropTypes from 'prop-types';
import Article from 'organisms/Article';

const styles = require('./ArticleGroup.skin');

console.log('ArticleGroup - scss: ', styles);

class ArticleGroup extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { list, index } = this.props;

    return (
      <ul
        className={styles['root']}
        role="region"
        aria-labelledby={`art-grp-cmp-${index}`}
      >
        {list.map(item => {
          const { type } = item;
          const ramdom = Math.round(Math.random() * 10000);

          return (
            <li className={styles[type]} key={`art-grp-item-cmp-${ramdom}`}>
              <Article index={ramdom} key={`art-cmp-${ramdom}`} {...item} />
            </li>
          );
        })}
      </ul>
    );
  }
}

ArticleGroup.defaultProps = {
  list: []
};

ArticleGroup.propTypes = {
  index: PropTypes.number.isRequired,
  list: PropTypes.array
};

export default ArticleGroup;
