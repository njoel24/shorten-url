import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LastResearches from './LastResearches';
import { ShortContext } from '../Short.provider';

jest.mock('../../../../utils/browserUtils', () => ({
  copyToClipBoard: jest.fn()
}))

const mockedLastResearchesWithMultipleResults = [{ code: "txpli",
  short_link: "shrtco.de\/txpli",
  full_short_link: "https:\/\/shrtco.de\/txpli",
  short_link2: "9qr.de\/txpli",
  full_short_link2: "https:\/\/9qr.de\/txpli",
  short_link3: "shiny.link\/txpli",
  full_short_link3: "https:\/\/shiny.link\/txpli",
  share_link: "shrtco.de\/share\/txpli",
  full_share_link: "https:\/\/shrtco.de\/share\/txpli",
  original_link: "http:\/\/gogole2.com"}, 
  { code: "txpli",
  short_link: "shrtco.de\/txpli",
  full_short_link: "https:\/\/shrtco.de\/txpli",
  short_link2: "9qr.de\/txpli",
  full_short_link2: "https:\/\/9qr.de\/txpli",
  short_link3: "shiny.link\/txpli",
  full_short_link3: "https:\/\/shiny.link\/txpli",
  share_link: "shrtco.de\/share\/txpli",
  full_share_link: "https:\/\/shrtco.de\/share\/txpli",
  original_link: "http:\/\/gogole2.com"}]

function renderMultipleResultsWithProvider() {
  render(<ShortContext.Provider value={{search: jest.fn(), lastResearches: mockedLastResearchesWithMultipleResults }} ><LastResearches />
    </ShortContext.Provider>)
}

const mockedLastResearchesWithSingleResult = [{ code: "txpli",
  short_link: "shrtco.de\/txpli",
  full_short_link: "https:\/\/shrtco.de\/txpli",
  short_link2: "9qr.de\/txpli",
  full_short_link2: "https:\/\/9qr.de\/txpli",
  short_link3: "shiny.link\/txpli",
  full_short_link3: "https:\/\/shiny.link\/txpli",
  share_link: "shrtco.de\/share\/txpli",
  full_share_link: "https:\/\/shrtco.de\/share\/txpli",
  original_link: "http:\/\/gogole2.com"}]

function renderSingleResultWithProvider() {
  render(<ShortContext.Provider value={{search: jest.fn(), lastResearches: mockedLastResearchesWithSingleResult }} ><LastResearches />
    </ShortContext.Provider>)
}

describe('<LastResearches />', () => {
  test('it should mount', () => {
    render(<LastResearches />);
    
    const lastResearches = screen.getByTestId('LastResearches');

    expect(lastResearches).toBeInTheDocument();
  });

  test('it should not find any button if there are no last researches', () => {
    render(<LastResearches />);
    
    const button = screen.queryByText('Copy');
    
    expect(button).toBe(null);
  });

  test('it should find a button if there are last reasearches', () => {
    renderMultipleResultsWithProvider();
    
    const buttons = screen.queryAllByText('Copy');
    
    expect(buttons[0]).not.toBe(null);
  });

  test('it should click on a button if there are last reasearches and text within button should change to copied', () => {
    renderMultipleResultsWithProvider();
    
    const buttons = screen.queryAllByText('Copy');
    if (buttons) {
      fireEvent.click(buttons[0]);
    }
    expect(buttons[0]?.innerHTML).toBe('Copied');
  });

  test('it should copy one url at each time', () => {
    renderMultipleResultsWithProvider();
    
    const buttons = screen.queryAllByText('Copy');
    if (buttons) {
      fireEvent.click(buttons[0]);
    }
    expect(buttons[0]?.innerHTML).toBe('Copied');
    expect(buttons[1]?.innerHTML).toBe('Copy');

    fireEvent.click(buttons[1]);
    expect(buttons[0]?.innerHTML).toBe('Copy');
    expect(buttons[1]?.innerHTML).toBe('Copied');
  });

  test('it should render only 1 button when there is only 1 result', () => {
    renderSingleResultWithProvider();
    const buttons = screen.queryAllByText('Copy');
    expect(buttons.length).toBe(1);
  });

  test('it should show original link and the short link on each result', () => {
    renderSingleResultWithProvider();
    screen.getByText('shrtco.de\/txpli');
    screen.getByText('http:\/\/gogole2.com');
  })
});