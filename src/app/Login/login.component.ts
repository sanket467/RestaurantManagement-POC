import { Component, Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';


@Component({
selector: 'login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent{

  constructor(private http: HttpClient,  private router: Router){};

  id = '';
  password = '';


  login(){

    const loginData = new FormData();
    loginData.append("id", this.id);
    loginData.append("password", this.password);

    this.http.post<{message: String, tableCount: Number, name: String}>("http://localhost:3000/api/rest/login", loginData)
    .subscribe(result => {
      if(result.message === "Logged In!!!"){
        this.router.navigate(['/restaurant']);
      }
      else{
        alert(result.message);
      }
    });
  }

}
