import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Rest } from './Login/rest.model';

@Injectable({ providedIn: 'root' })
export class RestService {

  public rest:any = 'sanket' ;

  public fetchData  = new Subject<any> ();
  public restObjBuf:any;

  constructor(private http: HttpClient, private router: Router) {}
  getRest(restId){
   this.http.get<{message: string, restName: string, id: string, tctr: number}>('http://localhost:3000/api/rest/dash/' + restId)
   .subscribe(result =>
    {
      if(result.message === "Found"){
        console.log(result);
        this.rest = result;
        this.fetchData.next(this.rest);
      }
      console.log("In Get Rest => " + this.rest)
    });
  }

  getRestInfo(){
    return this.fetchData.asObservable();
  }

  getTableInfo(){
    return this.restObjBuf;
  }

  goToTable(obj: any){
     this.restObjBuf = obj;
     //this.router.navigate(['/table']);
  }

  goToMenu(obj: any){
    console.log("here");
    this.restObjBuf = obj;
    //this.router.navigate(['/menu']);
  }


  goToBusiness(obj: any){
    this.restObjBuf = obj;
    let busData = new FormData();
    console.log("!!!" + this.restObjBuf.table);
    console.log("!!!" + this.restObjBuf.restId);
    busData.append('quant', this.restObjBuf.table);
    busData.append('restId', this.restObjBuf.restId);
    this.http.post('http://localhost:3000/api/table/addTable', busData)
    .subscribe(result => {console.log(result)});
    this.router.navigate(['/business']);
  }

  getMenuInfo(){
    return this.restObjBuf;
  }

  modifyTable(id, tctr){
   console.log("tableid" + id + 'sdads' + tctr);
   this.http.patch('http://localhost:3000/api/rest/table/' + id, {table: tctr}).subscribe(result => {
     console.log(result);
     alert("Number of Tables Updated!!!");
   });
  }
}
