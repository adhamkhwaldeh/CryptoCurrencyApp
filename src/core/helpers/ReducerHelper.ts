import {
  LOADING,
  DISMISS_LOADING,
  NO_INTERNET_CONNECTION,
  INTERNAL_SERVER_ERROR,
  NOT_AUTHORIZED,
  SEPARATOR,
  CLEAR_STATE_ALL,
  CLEAR_STATE,
  NO_DATA_FOUND,
} from '../types/BaseTypes';

import BaseAction from '../actions/BaseAction';
import BaseState from '../states/BaseState';

export default class ReducerHelper {
  static handleCommonStates<Type extends BaseState<any>>(
    modelPrefix: string,
    state: Type,
    action: BaseAction,
  ): Type {
    if (action.type.startsWith(modelPrefix + SEPARATOR)) {
      if (action.type.endsWith(SEPARATOR + LOADING)) {
        return {
          ...state,
          isLoading: true,
        };
      } else if (action.type.endsWith(SEPARATOR + DISMISS_LOADING)) {
        return {
          ...state,
          isLoading: false,
        };
      } else if (action.type.endsWith(SEPARATOR + INTERNAL_SERVER_ERROR)) {
        return {
          ...state,
          internalServerError: action.payload,
        };
      } else if (action.type.endsWith(SEPARATOR + NO_INTERNET_CONNECTION)) {
        return {
          ...state,
          noInternetConnection: true,
        };
      }
      // else if (action.type.endsWith(SEPARATOR + CLEAR_STATE_ALL)) {
      //   return {
      //     ...state.resetAllBaseState(modelPrefix),
      //   };
      // }
      else if (action.type.endsWith(SEPARATOR + CLEAR_STATE)) {
        return {
          ...state.resetBaseState(),
        };
      } else if (action.type.endsWith(SEPARATOR + NO_DATA_FOUND)) {
        return {
          ...state,
          isEmpty: true,
        };
      }
    }
    return state;
  }
}
