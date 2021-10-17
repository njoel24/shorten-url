import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('it should match the snapshot', () => {
  const wrapper = render(<App />);

  expect(wrapper).toMatchSnapshot();
});