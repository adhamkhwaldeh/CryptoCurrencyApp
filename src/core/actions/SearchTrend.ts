import {
  SEARCH_TREND_PREFIX,
  SEARCH_TREND_LOADING,
  SEARCH_TREND_DISMISS_LOADING,
  SEARCH_TREND_SUCCESS,
  SEARCH_TREND_NO_DATA_FOUND,
} from "../types/SearchTrendTypes";

import { baseURL } from "../networking/http-common";
import BaseAction from "./BaseAction";
import NetworkCallHelper from "../networking/NetworkCallHelper";
import LoggingHelper from "../../helpers/LoggingHelper";
import { SearchTrendResponse } from "../../data/responseModels/SearchTrendResponse";

export const searchTrend = () => {
  return async (dispatch) => {
    dispatch({ type: SEARCH_TREND_LOADING });
    NetworkCallHelper.request<SearchTrendResponse>(
      SEARCH_TREND_PREFIX,
      // baseURL +
      "/search/trending",
      NetworkCallHelper.GET,
      {},
      {
        onSuccess: function (data: SearchTrendResponse) {
          LoggingHelper.log("data loaded successfully");
          dispatch({ type: SEARCH_TREND_DISMISS_LOADING });
          if (data?.coins?.length > 0) {
            dispatch({
              type: SEARCH_TREND_SUCCESS,
              payload: data?.coins,
            });
          } else {
            dispatch({ type: SEARCH_TREND_NO_DATA_FOUND });
          }
        },
        onError: function (action: BaseAction) {
          LoggingHelper.log("an onError data loaded");
          dispatch({ type: SEARCH_TREND_DISMISS_LOADING });

          dispatch({ type: action.type, payload: action.payload });
        },
      }
    );
  };
};
