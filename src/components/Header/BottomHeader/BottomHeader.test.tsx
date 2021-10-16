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

  test('it should render a big title and a description underneath', () => {
    render(<BottomHeader />);
    expect(screen.getByText('More than just shorten links')).toBeInTheDocument();
    expect(screen.getByText("Build your brand's recognition and get detailed insight on how your links are performing")).toBeInTheDocument();
  });

  test('it should render a button with some text within', () => {
    render(<BottomHeader />);
    const button = screen.getByTestId('BottomHeaderButton');
    expect(button).toBeInTheDocument();
    expect(button.innerHTML).toBe('Get Started');
  });
});