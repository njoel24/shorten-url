import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Input from './Input';

describe('<Input />', () => {
  test('it should mount', () => {
    render(<Input />);
    const input = screen.getByTestId('Input');
    expect(input).toBeInTheDocument();
  });

  test('it should show an error if user tries to search without putting any url', () => {
    render(<Input />)
    const button = screen.getByText('Shorten it!');
    fireEvent.click(button);  
    screen.getByText('Please, add a link');
  })

  test('it should not show an error if user tries to search by inputting an url', () => {
    render(<Input />)
    const input = screen.getByPlaceholderText('Shorten a link here...')
    fireEvent.change(input, {target: {value: '23'}})
    const button = screen.getByText('Shorten it!');
    fireEvent.click(button);   
    expect(screen.queryByText('Please, add a link')).not.toBeInTheDocument();
  })
});