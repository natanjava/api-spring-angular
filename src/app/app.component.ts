import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './service/login-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'api-spring-angular';
  
  constructor (private router : Router) {

  }

  ngOnInit(): void {

    if (localStorage.getItem('token') == null) {
      this.router.navigate(['login']);
    }

  }


  public sair() {
    localStorage.clear();
    this.router.navigate(['login']);

  }



  public esconderNavMenu(){
    if ( localStorage.getItem('token') !== null && 
         localStorage.getItem('token').toString().trim() !== null) {
          return false;
    } else {
      return true;
    } 


  }


  
}
