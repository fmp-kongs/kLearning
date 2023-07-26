import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginObj: any = {
    userEmail:'',
    userPassword:''
  };
  signupUsers: any;

  constructor() {}

  ngOnInit(): void {

    const localData = localStorage.getItem('signUpUsers');
    if(localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
    
  }
  onLogIn(){
    const isUserExist = this.signupUsers.find((m: { userEmail: any; userPassword: any; }) =>m.userEmail == this.loginObj.userEmail && m.userPassword == this.loginObj.userPassword);
    if(isUserExist != undefined) {
      alert('User loggedin Successfully');
      // How to do routing to course catalog from here.
    }else {
      alert('invalid credentials');
    }
    
  }


}
