import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { Pagination } from '../../../models/Pagination';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() dataPagination: Pagination;

  constructor(
    private router: Router,
    private generalService: GeneralService
  ) { }

  ngOnInit() {
  }

  toDetail(slug: string) {
    this.router.navigateByUrl('/course/' + slug);
  }

  renderRating(rating: number) {
    return this.generalService.mappingRatingClass(rating);
  }

}
