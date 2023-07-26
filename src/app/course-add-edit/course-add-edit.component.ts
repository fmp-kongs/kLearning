import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-course-add-edit',
  templateUrl: './course-add-edit.component.html',
  styleUrls: ['./course-add-edit.component.css']
})
export class CourseAddEditComponent {
  courseForm: FormGroup;

  category:string[] = [
    'Technology',
    'Art',
    'Story Telling',
    'Cinematography'
  ];

  constructor( private _fb:FormBuilder) {
    this.courseForm = this._fb.group({
      course:'',
      instructor:'',
      description:'',
      duration:'',
      genre:''
    });
  }


  onSubmitForm(){
    if(this.courseForm.valid) {
      console.log(this.courseForm.value)
    }
  }
}
