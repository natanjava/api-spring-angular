import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../app-constants';
import { Router } from '@angular/router';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient, private router: Router) { }

  recuperar(login){
    
    let user = new User();
    user.login = login;

    return this.http.post(AppConstants.baseUrlPath +'recuperar/', user).subscribe(data => {
      
      alert(JSON.parse(JSON.stringify(data)).error);

    },
      error => {
        console.error("Erro ao recuperar o login");
        alert('Erro ao recuperar login');
      }
    )
  }

  login(usuario){
    //console.info(JSON.stringify(usuario))
    return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario)).subscribe(data => {
      //console.info(JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1]);
      var token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];
      localStorage.setItem("token", token);

      console.info("Toke: "+ localStorage.getItem("token"));
      this.router.navigate(['home']);

    },
      error => {
        console.error("Erro ao fazer o login");
        alert('Acesso Negado');
      }
    )
  }
}
