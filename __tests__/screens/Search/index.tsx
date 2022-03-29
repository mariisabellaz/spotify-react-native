import React from 'react';
import renderer from 'react-test-renderer';

import { Search } from '@screens/Search';

test('renders correctly', () => {
  const tree = renderer.create(<Search />).toJSON();
  expect(tree).toMatchSnapshot();
});