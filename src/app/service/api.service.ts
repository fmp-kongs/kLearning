import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { CourseData } from '../interface/course';
import { WeekContent } from '../interface/week-content';
import { Content } from '../interface/content';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl ="assets/data/course-data.json";
  baseUrl2 = "assets/data/course-content.json"
  courses:CourseData[] = [];
  content : Content[] = [];
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


  getContentForCourses(): Observable<Content[]>{
    return this.http.get<Content[]>(this.baseUrl2).pipe(
      map((course)=>{
        this.content=course
        return course
      }))
    }

  getContentById(id:number): Observable< Content | undefined> {
    return this.getContentForCourses().pipe(
      map((courses)=>
        courses.find((course)=>course.courseId===id))
      
    );
  }








}


