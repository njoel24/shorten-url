import { setCache } from "../../../utils/cacheUtils";
import { LAST_RESEARCH_SIZE, SET_LAST_RESEARCHES_ACTION } from "./Short.const";
import { ShortenResponse, ShortenResult } from "./Short.types";

export function lastResearchReducer(state: Array<ShortenResult>, action: {type: string, payload: ShortenResponse}) {
    switch (action.type) {
      case SET_LAST_RESEARCHES_ACTION:
        let results = [];
        if (state.length >= LAST_RESEARCH_SIZE ) {
          results = [...state.slice(1), (action.payload.result)];
        } else {
          results = [...state, (action.payload.result)]
        }
        setCache(results);
        return results;
      default:
        return state;
    }
  }