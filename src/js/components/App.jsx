import React from 'react';

import BannerSlot from 'atoms/BannerSlot';
import Category from 'templates/Category';

const App = props => (
  <Category name="accueil" {...props}>
    <BannerSlot />
  </Category>
);

export default App;
