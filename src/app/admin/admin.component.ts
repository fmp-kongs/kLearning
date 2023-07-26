import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseAddEditComponent } from '../course-add-edit/course-add-edit.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private _dialog:MatDialog) {}
    openAddEditCourseForm() {
      this._dialog.open(CourseAddEditComponent);
    }
  
}


