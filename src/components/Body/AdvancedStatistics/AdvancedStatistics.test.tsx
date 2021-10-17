import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AdvancedStatistics from './AdvancedStatistics';

describe('<AdvancedStatistics />', () => {
  test('it should mount', () => {
    render(<AdvancedStatistics />);
    
    const advancedStatistics = screen.getByTestId('AdvancedStatistics');

    expect(advancedStatistics).toBeInTheDocument();
  });

  test('it should match the snapshot', () => {
    const wrapper = render(<AdvancedStatistics />);

    expect(wrapper).toMatchSnapshot();
  });
});