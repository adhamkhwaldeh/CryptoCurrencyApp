import { CoinModel } from "../../data/models/CoinModel";
import LoggingHelper from "../../helpers/LoggingHelper";
import BaseAction from "../actions/BaseAction";
import ReducerHelper from "../helpers/ReducerHelper";
import BaseState from "../states/BaseState";

import {
  SEARCH_TREND_SUCCESS,
  SEARCH_TREND_CLEAR_STATE,
  SEARCH_TREND_PREFIX,
  SEARCH_TREND_CLEAR_STATE_ALL,
} from "../types/SearchTrendTypes";

const initialState = new BaseState<Array<CoinModel>>([]);

const statusUpdatesReducer = (state = initialState, action: BaseAction) => {
  switch (action.type) {
    case SEARCH_TREND_SUCCESS:
      return {
        ...state,
        isDataSubmitted: true,
        data: action.payload,
      };
    case SEARCH_TREND_CLEAR_STATE:
      return {
        ...state.resetBaseState(),
        isDataSubmitted: false,
        data: null,
      };
    case SEARCH_TREND_CLEAR_STATE_ALL:
      return {
        ...state.resetBaseState(),
        isDataSubmitted: false,
        data: null,
      };
    default:
      return ReducerHelper.handleCommonStates(
        SEARCH_TREND_PREFIX,
        state,
        action
      );
  }
};

export default statusUpdatesReducer;
