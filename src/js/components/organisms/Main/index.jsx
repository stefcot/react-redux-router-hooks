import React from 'react';
import PropTypes from 'prop-types';
import Content from 'organisms/Content/index';

const styles = require('./Main.skin');

const Main = ({ name, page, content, children }) => (
  <main className={styles['root']} id={name}>
    <Content blocks={content} page={page} />
    {children}
  </main>
);

Main.propTypes = {
  children: PropTypes.object,
  content: PropTypes.array,
  name: PropTypes.string,
  page: PropTypes.string
};

Main.defaultProps = {
  children: undefined,
  content: undefined,
  name: '',
  page: ''
};

export default Main;
