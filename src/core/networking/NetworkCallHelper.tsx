import BaseAction from "../actions/BaseAction";
import Either from "./Either";
import ActionHelper from "../helpers/ActionHelper";
import http from "./http-common";
import {
  INTERNAL_SERVER_ERROR,
  NO_INTERNET_CONNECTION,
  SEPARATOR,
  SOMETHING_WENT_WRONG,
} from "../types/BaseTypes";
import LoggingHelper from "../../helpers/LoggingHelper";

export default class NetworkCallHelper {
  static POST: string = "post";
  static GET: string = "get";
  static PUT: string = "put";

  static async request<T>(
    prefix: string,
    url: string,
    method: string,
    data: any,
    callBack: Either<T>
  ) {
    try {
      const response = await (method == this.POST
        ? http.post(url, data)
        : method == this.PUT
        ? http.put(url, data)
        : http({ url: url }));

      if (response.status == 200) {
        callBack.onSuccess(response.data);
        return;
      } else if (response.data.error != null) {
        callBack.onError(
          new BaseAction(
            prefix + SEPARATOR + INTERNAL_SERVER_ERROR,
            response.data.error.details
          )
        );
        return;
      }

      callBack.onError(
        new BaseAction(prefix + SEPARATOR + SOMETHING_WENT_WRONG, {})
      );
    } catch (error: any) {
      var baseAction = ActionHelper.handleException(prefix, error?.response);
      if (baseAction != null) {
        callBack.onError(baseAction);
      }
    }
  }
}
