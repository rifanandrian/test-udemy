import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Course } from '../../models/Course';
import { Pagination } from '../../models/Pagination';
import { CoursesService } from '../services/courses.service';
import { GeneralService } from '../services/general.service';

export interface page {
  no: number;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public data: Course[] = [];
  public tempData: Course[] = [];

  public selectedFormat = 'ASC';
  public selectedCategory = 'Price';
  public selectedRatingValue = '5';

  public dataPaginator: Pagination;

  // pagination
  public pages: page[] = [];
  public currentPage = 1;

  constructor(
    private titleService: Title,
    private courseService: CoursesService,
    public generalService: GeneralService
  ) { }

  ngOnInit() {
    // SEO
    this.titleService.setTitle('Home Page - Udemy Clone Site');

    this.getData();
  }

  getData() {
    this.courseService.getCourses().subscribe(
      res => {
        const tempData = res
        for (let i = 0; i < tempData.length; i++) {
          tempData[i]['label'] = this.generalService.setLabel(res[i]);
        }
        this.data = tempData;
        this.dataPaginator = new Pagination(this.paginator(this.data , 1));
      }
    )
  }

  selectPage(page: number) {
    this.dataPaginator = new Pagination(this.paginator(this.tempData.length > 0 ? this.tempData : this.data , page));
  }

  sortFormat(e: any) {
    this.selectedFormat = e.target.value;
    this.onSort();
  }

  sortCategory(e: any) {
    this.selectedCategory = e.target.value;
    this.onSort();
  }

  sortByRating(e: any) {
    this.selectedRatingValue = e.target.value;
    this.onSort();
  }
  
  onSort() {
    let tempData = this.data;
    if (this.selectedCategory === 'Price') {
      tempData.sort((a, b) => { 
        return this.selectedFormat === 'ASC' ? (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0) : (b.price > a.price) ? 1 : ((a.price > b.price) ? -1 : 0); 
      });
    } 
    else if (this.selectedCategory === 'Rating') {
      // tempData.sort((a, b) => { 
      //   return this.selectedFormat === 'ASC' ? (a.rating > b.rating) ? 1 : ((b.rating > a.rating) ? -1 : 0) : (b.rating > a.rating) ? 1 : ((a.rating > b.rating) ? -1 : 0);
      // });
      // let test = [];
      // test = tempData.filter(x => {
      //   console.log(x.rating >= parseInt(this.selectedRatingValue));
      //   x.rating >= parseInt(this.selectedRatingValue);
      // } );
      tempData = [];
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].rating >= parseInt(this.selectedRatingValue)) {
          tempData.push(this.data[i]);
        }
      }
      tempData.sort((a, b) => { 
        return this.selectedFormat === 'ASC' ? (a.rating > b.rating) ? 1 : ((b.rating > a.rating) ? -1 : 0) : (b.rating > a.rating) ? 1 : ((a.rating > b.rating) ? -1 : 0);
      });
    }
    this.tempData = tempData;
    this.dataPaginator = new Pagination(this.paginator(this.tempData, this.currentPage));
  }

  paginator(items: Course[], desire_page: number) {

    const page = desire_page || 1;
    const per_page = 3;
    const offset = (page - 1) * per_page;
  
    const paginatedItems = items.slice(offset).slice(0, per_page);
    const total_pages = Math.ceil(items.length / per_page);

    this.currentPage = page;
    this.pages = [];
    for (let i = 0; i < total_pages; i++) {
      this.pages.push({
        no: i + 1,
      })
    }
    // this.data = items;

    return {
      page: page,
      per_page: per_page,
      pre_page: page - 1 ? page - 1 : null,
      next_page: (total_pages > page) ? page + 1 : null,
      total_data: items.length,
      total_pages: total_pages,
      data: paginatedItems
    };
  }

}
