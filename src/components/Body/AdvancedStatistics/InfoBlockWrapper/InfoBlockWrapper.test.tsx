import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InfoBlockWrapper from './InfoBlockWrapper';

describe('<InfoBlockWrapper />', () => {
  test('it should mount', () => {
    render(<InfoBlockWrapper />);
    
    const infoBlockWrapper = screen.getByTestId('InfoBlockWrapper');

    expect(infoBlockWrapper).toBeInTheDocument();
  });

  test('it should match the snapshot', () => {
    const wrapper = render(<InfoBlockWrapper />);

    expect(wrapper).toMatchSnapshot();
  });
});