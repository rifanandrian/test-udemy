import { Component, OnInit } from '@angular/core';
import { Course } from 'src/models/Course';

@Component({
  selector: 'app-detail-items',
  templateUrl: './detail-items.component.html',
  styleUrls: ['./detail-items.component.scss']
})
export class DetailItemsComponent implements OnInit {

  public data = Course;

  constructor() { }

  ngOnInit() {

  }

}
