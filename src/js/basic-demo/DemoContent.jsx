import React, { Component } from 'react';

import { Parser } from 'html-to-react';
import { subtract } from './math';

const logoImage = require('images/js.png');
const dogImage = require('../../templates/dog-image.html');

const htmlToReactParser = new Parser();

const styles = require('./demo-content');

console.log('DemoContent - scss: ', styles);

export default class DemoContent extends Component {
  static handleClick(ev) {
    console.log('You clicked the logo !!', ev.target.name);

    // Dynamic import for triggering code splitting
    import('./video')
      .then(module => {
        // If everything's OK
        document.getElementById('video-container').innerHTML = module.default;
      })
      .catch(err => {
        document.getElementById('video-container').innerHTML =
          "Error, Couldn' load the video!";
        // logging the error
        console.error(err);
      });
  }

  static addParagraph(name) {
    return (
      <p className={styles['box__text']}>
        {'hello, '}
        {name}
        {' the dog an the logo! And some test'}
      </p>
    );
  }

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  render() {
    console.log(subtract(5, 3));

    return (
      <article className={styles['box']}>
        <section>
          <h1 className={styles['box__title']}>Webpack 4 Demo</h1>
          {htmlToReactParser.parse(dogImage)}
          <button type="button" onClick={this.handleClick}>
            <img id="logo" src={logoImage} alt="dog" />
          </button>
        </section>
        <section id="video-container" />
        <section>{this.addParagraph('Snoopy')}</section>
      </article>
    );
  }
}
