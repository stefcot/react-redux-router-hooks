import React from 'react';
import PropTypes from 'prop-types';
import { Parser } from 'html-to-react';
import Figure from 'molecules/Figure';
import Related from 'molecules/Related';

const htmlToReactParser = new Parser();
const styles = require('./Article.skin.scss');

// console.log('Article - scss: ', styles);

class Article extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const {
      type,
      image,
      index,
      title,
      author,
      contentPath,
      isPremium,
      lead,
      related
    } = this.props;

    // console.log('Article::render - related: ', related);

    return (
      <article
        className={`${styles['root']} ${styles[type]}`}
        id={`art-cmp-${type}-${index}`}
      >
        <h2>{htmlToReactParser.parse(title)}</h2>
        {typeof image !== 'undefined' && image.imgPath !== '' && (
          <Figure
            contentPath={contentPath}
            index={index}
            isPremium={isPremium}
            {...image}
          />
        )}
        {typeof author !== 'undefined' && author !== '' && (
          <address>par {htmlToReactParser.parse(author)}</address>
        )}
        <p>{htmlToReactParser.parse(lead)}</p>
        {typeof related !== 'undefined' && related.length > 0 && (
          <Related list={related} />
        )}
      </article>
    );
  }
}

Article.defaultProps = {
  contentPath: '',
  image: {},
  isPremium: false,
  lead: '',
  title: '',
  type: ''
};

Article.propTypes = {
  contentPath: PropTypes.string,
  image: PropTypes.object,
  index: PropTypes.number.isRequired,
  isPremium: PropTypes.bool,
  lead: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string
};

export default Article;
