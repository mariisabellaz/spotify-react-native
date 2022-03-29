import React from 'react';
import renderer from 'react-test-renderer';

import { Category } from '@screens/Category';

test('renders correctly', () => {
  const tree = renderer.create(<Category />).toJSON();
  expect(tree).toMatchSnapshot();
});