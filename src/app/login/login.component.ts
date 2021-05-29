import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:any;
  password:any;
  constructor() { }

  ngOnInit(): void {
  }

login(){
if(this.username=="admin" && this.password=="admin"){
window.location.replace("/homepage");
}
else{
  alert("username and Password don't match")
}
}
}
