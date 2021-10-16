import { LAST_RESEARCH_SIZE, SET_LAST_RESEARCHES_ACTION } from "./Short.const";
import { ShortenResponse, ShortenResult } from "./types";

export function lastResearchReducer(state: Array<ShortenResult>, action: {type: string, payload: ShortenResponse}) {
    switch (action.type) {
      case SET_LAST_RESEARCHES_ACTION:
        if (state.length >= LAST_RESEARCH_SIZE ) {
          return [...state.slice(1), (action.payload.result)];
        }
        return [...state, (action.payload.result)];
      default:
        return state;
    }
  }