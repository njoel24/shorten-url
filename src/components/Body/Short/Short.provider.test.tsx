import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ShortProvider } from './Short.provider';
import { getCache } from '../../../utils/cacheUtils';

jest.mock('../../../utils/cacheUtils', () => ({
  getCache: jest.fn()
}));

const TestComponent = () => null;

describe('Short provider', () => {
  test('it should get the cache on first load', () => {
    render(<ShortProvider><TestComponent /></ShortProvider>);
    expect(getCache).toHaveBeenCalled();
  });
});