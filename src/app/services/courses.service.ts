import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private data = [
    {
      "slug": "learn-ethical-hacking-from-scratch",
      "title": "Learn Ethical Hacking From Scratch",
      "description": "Become an ethical hacker that can hack computer systems like black hat hackers and secure them like security experts.",
      "instructors": "Zaid Sabih, z Security",
      "price": 999000,
      "price_string": "Rp999,000",
      "rating": 4.5,
      "review": 40,
      "total_hours": 16,
      "total_lecture": 145,
      "levels": "All Levels",
      "wishlist": false,
      "icons": "https://img-c.udemycdn.com/course/240x135/857010_8239_2.jpg",
      "createdDate": "2022-10-15",
      "label": []
    },
    {
      "slug": "learn-kubernetes",
      "title": "Kubernetes for the Absolute Beginners - Hands-on",
      "description": "Learn Kubernetes in simple, easy and fun way with hands-on coding exercises. For beginners in DevOps.",
      "instructors": "Mumshad Mannambeth, KodeKloud Training",
      "price": 899000,
      "price_string": "Rp899,000",
      "rating": 3.5,
      "review": 15,
      "total_hours": 6,
      "total_lecture": 61,
      "levels": "Beginner",
      "wishlist": false,
      "icons": "https://img-c.udemycdn.com/course/240x135/1602900_f550_10.jpg",
      "createdDate": "2022-11-15",
      "label": []
    },
    {
      "slug": "the-complete-internet-security-privacy-course-volume-1",
      "title": "The Complete Cyber Security Course : Hackers Exposed!",
      "description": "Volume 1 : Become a Cyber Security Specialist, Learn How to Stop Hackers, Prevent Hacking, Learn IT Security & INFOSEC.",
      "instructors": "Nathan House",
      "price": 649000,
      "price_string": "Rp649,000",
      "rating": 4,
      "review": 30,
      "total_hours": 12,
      "total_lecture": 124,
      "levels": "All Levels",
      "wishlist": false,
      "icons": "https://img-c.udemycdn.com/course/240x135/614772_233b_9.jpg",
      "createdDate": "2022-12-15",
      "label": []
    },
    {
      "slug": "the-absolute-beginners-guide-to-information-cyber-security",
      "title": "The Absolute Beginners Guide to Cyber Security 2023 - Part 1",
      "description": "Learn Cyber Security concepts such as hacking, malware, firewalls, worms, phishing, encryption, biometrics, BYOD & more",
      "instructors": "Alexander On",
      "price": 549000,
      "price_string": "Rp549,000",
      "rating": 0,
      "review": 0,
      "total_hours": 45,
      "total_lecture": 57,
      "levels": "Beginner",
      "wishlist": false,
      "icons": "https://img-c.udemycdn.com/course/240x135/1236568_5ada_11.jpg",
      "createdDate": "2023-02-15",
      "label": []
    },
    {
      "slug": "penetration-testing",
      "title": "The Complete Ethical Hacking Course: Beginner to Advanced!",
      "description": "Learn how to do ethical hacking, penetration testing, web testing, and wifi hacking using kali linux!",
      "instructors": "Ermin Kreponic, Aldin Omerdic",
      "price": 899000,
      "price_string": "Rp899,000",
      "rating": 5,
      "review": 50,
      "total_hours": 25,
      "total_lecture": 113,
      "levels": "All Levels",
      "wishlist": false,
      "icons": "https://img-c.udemycdn.com/course/240x135/437490_c76a_4.jpg",
      "createdDate": "2023-02-11",
      "label": []
    }
  ]

  constructor(
    private http: HttpClient,
  ) { }
  
  getCourses(): Observable<any> {
    return of(this.data)
  }

  getCourseById(slug: string): Observable<any> {
    return of(this.data.filter(x => x.slug === slug))
  }

}
