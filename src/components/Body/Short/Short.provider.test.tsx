import React, { useContext } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ShortContext, ShortProvider } from './Short.provider';
import { getCache, setCache } from '../../../utils/cacheUtils';
import axios from 'axios';

jest.mock('../../../utils/cacheUtils', () => ({
  getCache: jest.fn(),
  setCache: jest.fn()
}));

jest.mock('axios', () => ({
  get: jest.fn()
}))

const TestComponent = () => {
  const {search} = useContext(ShortContext);
  try {
    search('testUrl');
  } catch (e) {
    console.log(e)
  }  
  return null;
};

describe('Short provider', () => {
  test('it should get the cache on first load', () => {
    render(<ShortProvider><TestComponent /></ShortProvider>);
    expect(getCache).toHaveBeenCalled();
  });

  test('it should cache the last research', () => {
    const fakeState = {state: 'ok'};
    (getCache as jest.Mock).mockImplementationOnce(() => fakeState )
    render(<ShortProvider><TestComponent /></ShortProvider>);
    expect(setCache).toHaveBeenCalledWith(fakeState);
  })

  test('it should call search from child component', () => {
    const fakeState = {state: 'ok'};
    (getCache as jest.Mock).mockImplementationOnce(() => fakeState )
    render(<ShortProvider><TestComponent /></ShortProvider>);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('https://api.shrtco.de/v2/shorten?url=testUrl');
  })
});