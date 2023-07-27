import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'kLearning';
  componentName = "app"; // property

  ngOnIt():void{

  }


  // A function which returns "100" after some operation
  sum(a: number,b: number) {
    //
    //
    //
    return (a+b)
  }
}
