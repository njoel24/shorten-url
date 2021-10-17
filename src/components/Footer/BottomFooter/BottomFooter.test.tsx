import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BottomFooter from './BottomFooter';

describe('<BottomFooter />', () => {
  test('it should mount', () => {
    render(<BottomFooter />);
    const bottomFooter = screen.getByTestId('BottomFooter');
    expect(bottomFooter).toBeInTheDocument();
  });

  test('it should match the snapshot', () => {
    const wrapper = render(<BottomFooter />);

    expect(wrapper).toMatchSnapshot();
  });
});