import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TopFooter from './TopFooter';

describe('<TopFooter />', () => {
  test('it should mount', () => {
    render(<TopFooter />);
    
    const topFooter = screen.getByTestId('TopFooter');

    expect(topFooter).toBeInTheDocument();
  });
});