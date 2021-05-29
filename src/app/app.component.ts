import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OrderManagement';
isLoggedIn:Boolean=false;

constructor(){}

ngOnInit(){
  if(window.location.href=="http://localhost:4200/login"|| window.location.href=="http://localhost:4200/"){
    this.isLoggedIn=false;
  }
  else{
    this.isLoggedIn=true;
  }
}
logOut(){
  this.isLoggedIn=false;
  window.location.replace("/login");
}
}
