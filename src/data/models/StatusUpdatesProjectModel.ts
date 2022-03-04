import { StatusUpdatesImageModel } from "./StatusUpdatesImageModel";

export default class StatusUpdatesProjectModel {
  type: string = "";
  id: string = "";
  name: string = "";
  symbol: string = "";
  image: StatusUpdatesImageModel;
}
