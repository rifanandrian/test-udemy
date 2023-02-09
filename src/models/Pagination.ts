import { Course } from "./Course";

export class Pagination {
  public page: number;
  public per_page: number;
  public pre_page: number;
  public next_page: number;
  public total_data: number;
  public total_pages: number;
  public data: Course[];

  constructor(paginationData: any) {
    this.page = paginationData['page'];
    this.per_page = paginationData['per_page'];
    this.pre_page = paginationData['pre_page'];
    this.next_page = paginationData['next_page'];
    this.total_data = paginationData['total_data'];
    this.total_pages = paginationData['total_pages'];
    this.data = paginationData['data'];
  }
}
