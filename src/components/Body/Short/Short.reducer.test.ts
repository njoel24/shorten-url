import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { lastResearchReducer } from './Short.reducer';
import { SET_LAST_RESEARCHES_ACTION } from './Short.const';
import { ShortenResponse } from './Short.types';
import { setCache } from '../../../utils/cacheUtils';

jest.mock('../../../utils/cacheUtils', () => ({
  setCache: jest.fn()
}));

describe('Short reducer', () => {
  test('it should set last researches', () => {
    const lastResearchResponse: ShortenResponse = {
      ok: true,
      result: {
          code: "tzcjlH",
          short_link: "shrtco.de\/tzcjlH",
          full_short_link: "https:\/\/shrtco.de\/tzcjlH",
          short_link2: "9qr.de\/tzcjlH",
          full_short_link2: "https:\/\/9qr.de\/tzcjlH",
          short_link3: "shiny.link\/tzcjlH",
          full_short_link3: "https:\/\/shiny.link\/tzcjlH",
          share_link: "shrtco.de\/share\/tzcjlH",
          full_share_link: "https:\/\/shrtco.de\/share\/tzcjlH",
          original_link: "http:\/\/google7.com"
      }
  }
    expect(lastResearchReducer([], {type: SET_LAST_RESEARCHES_ACTION, payload: lastResearchResponse})).toEqual([lastResearchResponse.result])
  });

  test('it should override the first element with last addition', () => {
    const lastResearchResponse: ShortenResponse = {
      ok: true,
      result: {
          code: "tzcjlH",
          short_link: "shrtco.de\/tzcjlH",
          full_short_link: "https:\/\/shrtco.de\/tzcjlH",
          short_link2: "9qr.de\/tzcjlH",
          full_short_link2: "https:\/\/9qr.de\/tzcjlH",
          short_link3: "shiny.link\/tzcjlH",
          full_short_link3: "https:\/\/shiny.link\/tzcjlH",
          share_link: "shrtco.de\/share\/tzcjlH",
          full_share_link: "https:\/\/shrtco.de\/share\/tzcjlH",
          original_link: "http:\/\/google7.com"
      }
  }
    expect(lastResearchReducer([lastResearchResponse.result, lastResearchResponse.result, lastResearchResponse.result, lastResearchResponse.result, lastResearchResponse.result], {type: SET_LAST_RESEARCHES_ACTION, payload: lastResearchResponse})).toHaveLength(5)
  });
});