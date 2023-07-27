import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interface/category';
import { CourseData } from 'src/app/interface/course';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  courseData:CourseData[] = []
  sortData :CourseData[] = []
  filterdata:CourseData[] = []

  categorySelected : number = 0

  private _searchText = ''

  get searchText(){
    return this._searchText
  }

  set searchText(value: string){
    this._searchText = value;
    this.sortData = this.searching(value)
  }

  searching(searchBy: string): any[] {

    searchBy = searchBy.toLowerCase();

    return this.courseData.filter(course =>

      course.courseName.toLowerCase().includes(searchBy)

    );

  }

  onSortSelected(id: number){
    this.categorySelected = id
    const catName = this.categories[id-1].name
    console.log(catName)
    this.sortData = this.courseData.filter((course) =>
    course.courseCategory.includes(catName))
  }

  constructor(private api: ApiService) {}

  ngOnInit(): void{
    this._searchText = ''
    

    this.api.getCourses()
    .subscribe(res=>{
      this.courseData = res;
      this.sortData = this.courseData
    })

   
  }




  categories : Category[] = [
    {
      "id" : 1,
      "name" : "Technology"
    },
    {
      "id" : 2,
      "name" : "Art"
    },
    {
      "id" : 3,
      "name" : "Story-telling"
    },
    {
      "id" : 4,
      "name" : "Cinematography"
    }
  ]



















}


