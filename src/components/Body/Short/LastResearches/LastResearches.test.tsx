import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LastResearches from './LastResearches';

describe('<LastResearches />', () => {
  test('it should mount', () => {
    render(<LastResearches />);
    
    const lastResearches = screen.getByTestId('LastResearches');

    expect(lastResearches).toBeInTheDocument();
  });
});