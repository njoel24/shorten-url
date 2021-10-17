import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MenuMobile from './MenuMobile';

describe('<MenuMobile />', () => {
  test('it should mount', () => {
    render(<MenuMobile />);
    
    const menuMobile = screen.getByTestId('MenuMobile');

    expect(menuMobile).toBeInTheDocument();
  });
});