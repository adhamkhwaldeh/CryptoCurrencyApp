import BaseAction from '../actions/BaseAction';
import BaseState from '../states/BaseState';
import {AxiosError} from 'axios';
import {
  INTERNAL_SERVER_ERROR,
  NO_INTERNET_CONNECTION,
  SEPARATOR,
} from '../types/BaseTypes';

export default class ActionHelper {

  static handleException(modelPrefix: string, error): BaseAction | null {
    // LoggingHelper.log('call internal server error code ' + JSON.stringify(error));
    // LoggingHelper.log('call internal server error status ' + error.status);
    // LoggingHelper.log('call internal server error');
    // LoggingHelper.log('error message :' + error.message);
    // LoggingHelper.log("error message :" + error.response?.);
    if (error == '' || error == null || error == undefined) {
      return new BaseAction(
        modelPrefix + SEPARATOR + NO_INTERNET_CONNECTION,
        error?.data?.error?.details,
      );
    }
    switch (error.status) {
      case 500:
        return new BaseAction(
          modelPrefix + SEPARATOR + INTERNAL_SERVER_ERROR,
          error?.data?.error?.details,
        );
    }
    return null;
  }
  
}
