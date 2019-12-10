import React from 'react';
import renderer from 'react-test-renderer';
import Box from '../index';

test('Box Component Snapshot Test', () => {
  const mock = {
    name: 'excliusivite',
    title: 'Première boite',
    description:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p><p>Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>'
  };
  const box = renderer.create(<Box {...mock} />);
  const tree = box.toJSON();
  expect(tree).toMatchSnapshot();
});
