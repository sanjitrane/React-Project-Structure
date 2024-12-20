/** Combines the required reducers for the store to consume  */

import { combineReducers } from '@reduxjs/toolkit';
import EpisodeReducer from "../features/Episodes/episodesSlice";

const rootReducer = combineReducers({
  /**Inclued the reducers here in key value pair, eg:
   * episodes: EpisodeReducer
   */
  episodes: EpisodeReducer
});

export default rootReducer;
