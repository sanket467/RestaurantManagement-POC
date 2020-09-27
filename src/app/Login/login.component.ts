import { Component, Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { LoginService } from '../auth.service';
import { Subscription } from 'rxjs';


@Component({
selector: 'login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent{


  constructor(private http: HttpClient,  private router: Router, private loginService: LoginService){};

  id = '';
  password = '';


  login(){
    const loginData = new FormData();
    loginData.append("id", this.id);
    loginData.append("password", this.password);
    this.loginService.loginUser(loginData);

  }

}
