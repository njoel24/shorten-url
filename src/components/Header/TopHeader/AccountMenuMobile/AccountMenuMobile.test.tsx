import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AccountMenuMobile from './AccountMenuMobile';

describe('<AccountMenuMobile />', () => {
  test('it should mount', () => {
    render(<AccountMenuMobile />);
    
    const accountMenuMobile = screen.getByTestId('AccountMenuMobile');

    expect(accountMenuMobile).toBeInTheDocument();
  });
});