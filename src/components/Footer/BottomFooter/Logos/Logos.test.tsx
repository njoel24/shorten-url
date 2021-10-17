import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Logos from './Logos';

describe('<Logos />', () => {
  test('it should mount', () => {
    render(<Logos />);
    
    const logos = screen.getByTestId('Logos');

    expect(logos).toBeInTheDocument();
  });

  test('it should match the snapshot', () => {
    const wrapper = render(<Logos />);

    expect(wrapper).toMatchSnapshot();
  });
});