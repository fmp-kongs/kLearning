import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseData } from 'src/app/interface/course';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {
  
  course: CourseData | undefined ;
  
  constructor(private api: ApiService, private router: ActivatedRoute) {}

  ngOnInit(): void{

    const courseId = parseInt(this.router.snapshot.params["id"])
    
    this.api.getCourseById(courseId).subscribe({
      next:course => {
        this.course = course;
      }
    }
    )
    

    

    

  }

  onEnrolled(){

    if(this.course)

    this.api.myCourses.push(this.course)

    console.log(this.api.myCourses)

  }

}

