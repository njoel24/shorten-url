import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AccountMobile from './AccountMobile';

describe('<AccountMobile />', () => {
  test('it should mount', () => {
    render(<AccountMobile />);
    
    const accountMobile = screen.getByTestId('AccountMobile');

    expect(accountMobile).toBeInTheDocument();
  });
});