import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{


  signupUsers: any[] = [];
  signupObj: any = {
    userEmail:'',
    userPassword:''
  };

  constructor() {}

  ngOnInit(): void {
    
  }
  onSignUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
    this.signupObj= {
      userEmail:'',
      userPassword:''

    };
    alert('Signed up successfully');
  }

}
