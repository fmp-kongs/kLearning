import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-add-edit',
  templateUrl: './course-add-edit.component.html',
  styleUrls: ['./course-add-edit.component.css']
})
export class CourseAddEditComponent implements OnInit {

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

  // constructor() { }
ngOnInit() {
this.courseForm = new FormGroup({
course: new FormControl('', [Validators.required, Validators.minLength(4)]),
description: new FormControl('', [Validators.required, Validators.minLength(5)]),
instructor: new FormControl('', [Validators.required, Validators.minLength(4)]),
duration: new FormControl('', [Validators.required, Validators.min(0)])

});
}

public myError = (controlName: string, errorName: string) =>{
return this.courseForm.controls[controlName].hasError(errorName);
}



  onSubmitForm(){
    if(this.courseForm.valid) {
      console.log(this.courseForm.value)
    }
  }
}
