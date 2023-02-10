export class Course {
  
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly instructors: string;
  readonly price: number;
  readonly price_string: string;
  readonly rating: number;
  readonly review: number;
  readonly total_hours: number;
  readonly total_lecture: number;
  readonly levels: string;
  readonly icons: string;
  readonly createdDate: string;
  public wishlist: boolean;
  public label = [];

  constructor(courseData: any) {
    this.slug = courseData['slug'];
    this.title = courseData['title'];
    this.description = courseData['description'];
    this.instructors = courseData['instructors'];
    this.price = courseData['price'];
    this.price_string = courseData['price_string'];
    this.rating = courseData['rating'];
    this.review = courseData['review'];
    this.total_hours = courseData['total_hours'];
    this.total_lecture = courseData['total_lecture'];
    this.levels = courseData['levels'];
    this.wishlist = courseData['wishlist'];
    this.icons = courseData['icons'];
    this.createdDate = courseData['createdDate'];
    this.label = courseData['label'];
  }
}
