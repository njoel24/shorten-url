import React, { createContext, useCallback, useEffect, useMemo, useReducer } from 'react';
import axios from "axios";
import { lastResearchReducer } from './Short.reducer';
import { ShortContextProps, ShortenResponse } from './Short.types';
import { BASE_URL, SET_LAST_RESEARCHES_ACTION } from './Short.const';
import { getCache, setCache } from '../../../utils/cacheUtils';

export const ShortContext = createContext<ShortContextProps>({
  search: () => null,
  lastResearches: []
});

export const ShortProvider = ({children}: {children: React.ReactNode}) => {
  const [state, dispatch] = useReducer(lastResearchReducer, getCache());

  const search = useCallback(async (url) => {
    try {
      const res = await axios.get(`${BASE_URL}${url}`);
      dispatch({type: SET_LAST_RESEARCHES_ACTION, payload: res.data as ShortenResponse});
    } catch (e) {
      throw e;
    }
  }, []);

  useEffect(() => {
    setCache(state);
  }, [state])

  return (
    <ShortContext.Provider value={useMemo(() => ({search, lastResearches: state}), [search, state])}>
      {children}
    </ShortContext.Provider>
  )
};
