import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Course } from '../../models/Course';
import { Pagination } from '../../models/Pagination';
import { CoursesService } from '../services/courses.service';

export interface page {
  no: number;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public title = 'Home Page - Udemy Clone Site'
  public data: Array<Course> = [];

  public selectedFormat = 'ASC';
  public selectedCategory = 'Price';

  public data_paginator: Pagination;

  // pagination
  public pages: page[] = [];
  public currentPage = 1;

  constructor(
    private metaTagService: Meta,
    private titleService: Title,
    private router: Router,
    private courseService: CoursesService
  ) { }

  ngOnInit() {
    // SEO
    this.titleService.setTitle(this.title);
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Angular SEO, Angular Universal' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Muhamad Rifan Andrian' },
      { name: 'date', content: '2023-02-11', scheme: 'YYYY-MM-DD' },
    ])

    this.getData();
  }

  getData() {
    this.courseService.getCourses().subscribe(
      res => {
        console.log(res);
        this.data = res
        this.data_paginator = new Pagination(this.paginator(this.data , 1));
      }
    )
  }

  mappingRatingClass(rating: number) {
    return 's' + rating * 2;
  }

  selectPage(page: number) {
    this.data_paginator = new Pagination(this.paginator(this.data , page));
  }

  sortFormat(e: any) {
    this.selectedFormat = e.target.value;
    this.onSort();
  }

  sortCategory(e: any) {
    this.selectedCategory = e.target.value;
    this.onSort();
  }
  
  onSort() {
    const tempData = this.data;
    if (this.selectedCategory === 'Price') {
      if (this.selectedFormat === 'ASC') {
        tempData.sort((a, b) => { return (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0); });
      } else {
        tempData.sort((a, b) => { return (b.price > a.price) ? 1 : ((a.price > b.price) ? -1 : 0); });
      }
    } else if (this.selectedCategory === 'Rating') {
      if (this.selectedFormat === 'ASC') {
        tempData.sort((a, b) => { return (a.rating > b.rating) ? 1 : ((b.rating > a.rating) ? -1 : 0); });
      } else {
        tempData.sort((a, b) => { return (b.rating > a.rating) ? 1 : ((a.rating > b.rating) ? -1 : 0); });
      }
    }
    this.data_paginator = new Pagination(this.paginator(tempData, this.currentPage));
  }

  toDetail(slug: string) {
    this.router.navigateByUrl('/course/' + slug);
  }

  paginator(items: Array<Course>, desire_page: number) {

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
