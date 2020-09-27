import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Rest } from './Login/rest.model';

@Injectable({ providedIn: 'root' })
export class LoginService {

  //public passRestId = new Subject<{ restId: String }>();
  public passRestId: String;

  restId: String = '';
  constructor(private http: HttpClient, private router: Router) {}
  loginUser(loginData: FormData) {
    this.http
      .post<{
        message: String;
        tableCount: Number;
        name: String;
        restId: String;
      }>('http://localhost:3000/api/rest/login', loginData)
      .subscribe((result) => {
        if (result.message === 'Logged In!!!') {
          console.log('Result Id is ' + result.restId);
          // this.passRestId.next({
          // restId : result.restId,
          // });

          console.log(this.passRestId);

          this.passRestId =  result.restId;


          this.router.navigate(['/restaurant']);
        } else {
          alert(result.message);
        }
      });
  }

  getRestId() {
    //return this.passRestId.asObservable();
    return this.passRestId;
  }
}
