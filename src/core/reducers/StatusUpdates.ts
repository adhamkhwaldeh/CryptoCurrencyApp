import { CoinModel } from "../../data/models/CoinModel";
import { StatusUpdatesModel } from "../../data/models/StatusUpdatesModel";
import LoggingHelper from "../../helpers/LoggingHelper";
import BaseAction from "../actions/BaseAction";
import ReducerHelper from "../helpers/ReducerHelper";
import BaseState from "../states/BaseState";

import {
  STATUS_UPDATES_SUCCESS,
  STATUS_UPDATES_CLEAR_STATE,
  STATUS_UPDATES_PREFIX,
  STATUS_UPDATES_CLEAR_STATE_ALL,
} from "../types/StatusUpdatesTypes";

const initialState = new BaseState<Array<StatusUpdatesModel>>([]);

const statusUpdatesReducer = (state = initialState, action: BaseAction) => {
  switch (action.type) {
    case STATUS_UPDATES_SUCCESS:
      return {
        ...state,
        isDataSubmitted: true,
        data: action.payload,
      };
    case STATUS_UPDATES_CLEAR_STATE:
      return {
        ...state.resetBaseState(),
        isDataSubmitted: false,
        data: null,
      };
    case STATUS_UPDATES_CLEAR_STATE_ALL:
      return {
        ...state.resetBaseState(),
        isDataSubmitted: false,
        data: null,
      };
    default:
      return ReducerHelper.handleCommonStates(
        STATUS_UPDATES_PREFIX,
        state,
        action
      );
  }
};

export default statusUpdatesReducer;
