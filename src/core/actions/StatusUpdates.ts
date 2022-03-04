import {
  STATUS_UPDATES_PREFIX,
  STATUS_UPDATES_LOADING,
  STATUS_UPDATES_DISMISS_LOADING,
  STATUS_UPDATES_SUCCESS,
  STATUS_UPDATES_NO_DATA_FOUND,
} from "../types/StatusUpdatesTypes";

import { baseURL } from "../networking/http-common";
import BaseAction from "./BaseAction";
import NetworkCallHelper from "../networking/NetworkCallHelper";
import LoggingHelper from "../../helpers/LoggingHelper";
import { SearchTrendResponse } from "../../data/responseModels/SearchTrendResponse";
import { StatusUpdatesPostModel } from "../../data/postModels/StatusUpdatesPostModel";
import { StatusUpdatesResponse } from "../../data/responseModels/StatusUpdatesResponse";

export const statusUpdates = (model: StatusUpdatesPostModel) => {
  return async (dispatch) => {
    dispatch({ type: STATUS_UPDATES_LOADING });
    NetworkCallHelper.request<StatusUpdatesResponse>(
      STATUS_UPDATES_PREFIX,
      baseURL +
        "/status_updates?per_page=" +
        model.per_page.toString() +
        "&page=" +
        model.page.toString() +
        (model.category == null ? "" : "&category=" + model.category) +
        (model.project_type == null
          ? ""
          : "&project_type=" + model.project_type),
      NetworkCallHelper.GET,
      {},
      {
        onSuccess: function (data: StatusUpdatesResponse) {
          dispatch({ type: STATUS_UPDATES_DISMISS_LOADING });
          if (data?.status_updates?.length > 0) {
            dispatch({
              type: STATUS_UPDATES_SUCCESS,
              payload: data?.status_updates,
            });
          } else {
            dispatch({ type: STATUS_UPDATES_NO_DATA_FOUND });
          }
        },
        onError: function (action: BaseAction) {
          dispatch({ type: STATUS_UPDATES_DISMISS_LOADING });

          dispatch({ type: action.type, payload: action.payload });
        },
      }
    );
  };
};
