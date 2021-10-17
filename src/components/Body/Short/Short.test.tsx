import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Short from './Short';

describe('<Short />', () => {
  test('it should mount', () => {
    render(<Short />);
    
    const short = screen.getByTestId('Short');

    expect(short).toBeInTheDocument();
  });

  test('it should match the snapshot', () => {
    const wrapper = render(<Short />);

    expect(wrapper).toMatchSnapshot();
  });
});