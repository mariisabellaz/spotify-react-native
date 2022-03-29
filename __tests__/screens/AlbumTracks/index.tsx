import React from 'react';
import renderer from 'react-test-renderer';

import { AlbumTracks } from '@screens/AlbumTracks';

test('renders correctly', () => {
  const tree = renderer.create(<AlbumTracks />).toJSON();
  expect(tree).toMatchSnapshot();
});