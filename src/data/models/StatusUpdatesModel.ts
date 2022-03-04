import StatusUpdatesProjectModel from "./StatusUpdatesProjectModel";

export class StatusUpdatesModel {
  description: string = "";
  category: string = "";
  created_at: string = "";
  user_title: string = "";
  pin: boolean = false;
  project: StatusUpdatesProjectModel;

  constructor() {}
}
