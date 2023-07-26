import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { CourseData } from '../interface/course';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl ="assets/data/course-data.json";
  courses:CourseData[] = [];

  constructor(private http: HttpClient) { }


  getCourses(): Observable<CourseData[]>{
    return this.http.get<CourseData[]>(this.baseUrl).pipe(
      map((course)=>{
        this.courses=course
        return course
      }))
    }

  getCourseById(id:number): Observable< CourseData | undefined> {
    return this.getCourses().pipe(
      map((courses)=>
        courses.find((course)=>course.courseId===id))
      
    );
  }


}


