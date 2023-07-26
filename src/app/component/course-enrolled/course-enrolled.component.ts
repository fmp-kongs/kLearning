import { Component, OnInit } from '@angular/core';
import { Content } from "src/app/interface/content";

@Component({
  selector: 'app-course-enrolled',
  templateUrl: './course-enrolled.component.html',
  styleUrls: ['./course-enrolled.component.css']
})
export class CourseEnrolledComponent implements OnInit{


  ngOnInit(): void{

   
  }

  // courseData:CourseData[] = []
  // sortData :CourseData[] = []

  // contentSelected:number = 0;

  // onSortSelected(id: number){
  //   this.contentSelected = id
  //   const catName = this.weeklyContent[id-1].contentName
  //   console.log(catName)
  //   this.sortData = this.courseData.filter((course) =>
  //   course.courseCategory.includes(catName))
  // }


  weeklyContent : Content[] = [
    {"contentId":1,
    "contentName":"Week-1",
    "contentURL":"https://www.youtube.com/embed/kKvK2foOTJM"

    },
    {"contentId":2,
    "contentName":"Week-2",
    "contentURL":"https://www.youtube.com/embed/RQVl1nmuyq4"

    },
    {"contentId":3,
    "contentName":"Week-3",
    "contentURL":"https://www.youtube.com/embed/u4ZoJKF_VuA"

    },
    {"contentId":4,
    "contentName":"Week-4",
    "contentURL":"https://www.youtube.com/embed/4O2JK_94g3Y"

    },
    {"contentId":5,
    "contentName":"Week-5",
    "contentURL":"https://www.youtube.com/embed/F4Zu5ZZAG7I"

    },
    {"contentId":6,
    "contentName":"Week-6",
    "contentURL":"https://www.youtube.com/embed/LnJwH_PZXnM"

    }
  ]

















}


