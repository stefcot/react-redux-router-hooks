import React from 'react';
import PropTypes from 'prop-types';
import { Parser } from 'html-to-react';

const styles = require('./Box.skin.scss');

const htmlToReactParser = new Parser();

const Box = ({ name, title, description, children }) => (
  <article className={styles['root']} id={name}>
    <h2>{title}</h2>
    <section>{htmlToReactParser.parse(description)}</section>
    {children}
  </article>
);

Box.defaultProps = {
  children: [],
  description: '',
  title: ''
};

Box.propTypes = {
  children: PropTypes.array,
  description: PropTypes.string,
  name: PropTypes.string.isRequired,
  title: PropTypes.string
};

export default Box;
