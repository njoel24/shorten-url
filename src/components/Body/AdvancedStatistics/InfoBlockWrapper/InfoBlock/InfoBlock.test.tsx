import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InfoBlock from './InfoBlock';

describe('<InfoBlock />', () => {
  test('it should mount', () => {
    render(<InfoBlock />);
    
    const infoBlock = screen.getByTestId('InfoBlock');

    expect(infoBlock).toBeInTheDocument();
  });
});