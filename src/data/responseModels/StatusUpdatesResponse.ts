import { CoinModel } from "../models/CoinModel";
import { StatusUpdatesModel } from "../models/StatusUpdatesModel";

export class StatusUpdatesResponse {
  status_updates: Array<StatusUpdatesModel> = [];

  constructor() {}
}
