import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs'
import { of } from 'rxjs'
import { Course } from '../../models/Course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private data: Course[];
  

  constructor(
    private http: HttpClient,
  ) { }
  
  getCourses(): Observable<any> {
    return this.http.get('assets/data.json').pipe(
      map((res: any) => {
        return this.data = res['data'];
      })
    )
  }

  getCourseById(slug: string): Observable<any> {
    return this.http.get('assets/data.json').pipe(
      map((res: any) => {
        this.data = res['data'];
        return this.data.filter(x => x.slug === slug);
      })
    )
  }

}
