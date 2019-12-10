import React from 'react';

import Header from 'organisms/Header';
import Main from 'organisms/Main';
import Aside from 'organisms/Aside';
import Footer from 'organisms/Footer';
import Box from 'molecules/Box';

const styles = require('./Category.skin');

const Category = ({ page, header, main, children, footer }) => (
  <div className={styles['root']} id={page}>
    <Header page={page} {...header} />
    {children}
    <Main name={`mn-entity-cmp-${page}`} page={page} {...main}>
      <Aside name={`sd-cmp-${page}`}>
        {[
          {
            name: 'excliusivite',
            title: 'Première boite',
            description:
              '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p><p>Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>'
          },
          {
            name: 'sports',
            title: 'Deuxième boite',
            description:
              '<p>Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p><p>Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.</p>'
          },
          {
            name: 'international',
            title: 'Troisième boite',
            description:
              '<p>Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.</p><p>Pellentesque congue.</p><p>Ut in risus volutpat libero pharetra tempor.</p>'
          }
        ].map(item => (
          <Box
            key={`box-aside-${Math.round(Math.random() * 1000)}`}
            {...item}
          />
        ))}
      </Aside>
    </Main>
    <Footer name={`ftr-cmp-${page}`} {...footer} />
  </div>
);

export default Category;
