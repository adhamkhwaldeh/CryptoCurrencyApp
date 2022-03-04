import BaseAction from "../actions/BaseAction";

export default interface EitherComp<T> {
  onSuccess(data: T);

  onError(action: BaseAction);
}
