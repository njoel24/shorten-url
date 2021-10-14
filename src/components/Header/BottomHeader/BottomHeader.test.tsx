import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BottomHeader from './BottomHeader';

describe('<BottomHeader />', () => {
  test('it should mount', () => {
    render(<BottomHeader />);
    
    const bottomHeader = screen.getByTestId('BottomHeader');

    expect(bottomHeader).toBeInTheDocument();
  });
});