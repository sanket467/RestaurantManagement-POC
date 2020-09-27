import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';
import { LoginService } from '../auth.service';
import { RestService } from '../rest.service';
import { Subscription } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

@Injectable()
export class LandingComponent implements OnInit, OnDestroy{

  sub = new Subscription();

  restId: String;
  restObj = {
     message: '',
     restName: '',
     restId: '',
     table: null
  };
  isLoaded = false;
  restInfo: Subscription;
  dashData: any;
  restName = '';



  constructor(private loginService: LoginService, private restService: RestService){};
  ngOnInit(){
    console.log("Called");
    // this.sub = this.loginService.getRestId().
    // subscribe((result: {restId: String}) => {
    //       this.restId = result.restId;
    // });


    this.restId = this.loginService.getRestId();
    console.log("End" + this.restId);
    this.restService.getRest(this.restId);

    this.restInfo = this.restService.fetchData.subscribe(
      (result: any) => {
        this.dashData = result;
        console.log("Yaha aagye ab =>" + result);
        this.restName = result.restName;
        this.restObj.restName = result.restName;
        this.restObj.restId = result.id;
        this.restObj.table = result.tctr;

      }

    )}

    loadTable(){
      console.log(this.restObj);
      this.restService.goToTable(this.restObj);
    }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
