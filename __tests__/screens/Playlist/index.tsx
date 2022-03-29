import React from 'react';
import renderer from 'react-test-renderer';

import { Playlist } from '@screens/Playlist';

test('renders correctly', () => {
  const tree = renderer.create(<Playlist />).toJSON();
  expect(tree).toMatchSnapshot();
});