import { Component, Injectable, OnInit, OnDestroy } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HttpClient } from "@angular/common/http";
import { Food } from '../Food/food.model';
import { RestService } from '../rest.service';

@Component({
  selector: 'food-component',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})

@Injectable()
export class FoodComponent implements OnInit {

  foods: Food[] = [];
  restInfo:any;

  constructor(private http: HttpClient, private restService: RestService){};

  ngOnInit(){

    this.restInfo = this.restService.getMenuInfo();
    console.log("In food " + this.restInfo.restId);

    this.http.get("http://localhost:3000/api/foods/getFood/" + this.restInfo.restId)
    .subscribe((foodData: any) => {
      this.foods = foodData;
      console.log(this.foods);
    }
    );
  }

}
