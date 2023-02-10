import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../models/Course';
import { CoursesService } from '../services/courses.service';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-detail-items',
  templateUrl: './detail-items.component.html',
  styleUrls: ['./detail-items.component.scss']
})
export class DetailItemsComponent implements OnInit {

  public data: Course;
  public labelClass: string;

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private courseService: CoursesService,
    private generalService: GeneralService
  ) { 
    this.route.params.subscribe(
      res => {
        this.getData(res['slug']);
      }
    )
  }

  ngOnInit() {
    this.titleService.setTitle(`${this.data.title} | Udemy Clone Site`);
  }

  getData(slug: string) {
    this.courseService.getCourseById(slug).subscribe(
      res => {
        const tempData = res;
        for (let i = 0; i < tempData.length; i++) {
          tempData[i]['label'] = this.generalService.setLabel(res[i]);

          this.labelClass = tempData[i]['label'][0] === 'NEW' ? 'bg-green' : tempData[i]['label'][0] === 'BEST SELLER' ? 'bg-yellow' : 'bg-red';
        }
        this.data = tempData[0];
      }
    )
  }

  setWishlist() {
    this.data.wishlist = !this.data.wishlist;
  }

  renderRating(rating: number) {
    return this.generalService.mappingRatingClass(rating);
  }

}
