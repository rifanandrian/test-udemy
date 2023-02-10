import { Injectable } from '@angular/core';
import { Course } from '../../models/Course';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }
  
  mappingRatingClass(rating: number) {
    return 's' + (Math.round(rating * 2)/2) * 2;
  }

  setLabel(data: Course) {
    let label = [];
    
    const todayDate = new Date();
    const dataDate = new Date(data.createdDate);
    const dateWeekBefore = new Date (todayDate.setDate(todayDate.getDate() - 7));

    if (dataDate >= dateWeekBefore) {
      label.push('NEW');
    }
    if (data.review > 20 && data.rating > 4) {
      label.push('BEST SELLER');
    }
    if (label.includes('NEW') && label.includes('BEST SELLER')) {
      label = [];
      label.push('Hot Lesson');
    }

    return label;
  }
}
