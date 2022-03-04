export default class BaseAction {
  type: string = '';
  payload: any = null;

  constructor(type: string, payload: any = null) {
    this.type = type;
    this.payload = payload;
  }
}
