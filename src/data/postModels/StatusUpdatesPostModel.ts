export class StatusUpdatesPostModel {
  category: String | null;
  project_type: String | null;
  per_page: number;
  page: number;

  constructor(
    category: String | null,
    project_type: String | null,
    per_page: number,
    page: number
  ) {
    this.category = category;
    this.project_type = project_type;
    this.per_page = per_page;
    this.page = page;
  }
}
