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

  test('it should render a big title', () => {
    render(<TopFooter />);
    expect(screen.getByText('Boost your Links today')).toBeInTheDocument();
  });

  test('it should render a button with some text within', () => {
    render(<TopFooter />);
    const button = screen.getByTestId('TopFooterButton');
    expect(button).toBeInTheDocument();
    expect(button.innerHTML).toBe('Get Started');
  });


});