import { Component, Injectable, OnInit, OnDestroy } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HttpClient } from "@angular/common/http";
import { Food } from '../Food/food.model';

@Component({
  selector: 'food-component',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})

@Injectable()
export class FoodComponent implements OnInit {

  foods: Food[] = [];

  constructor(private http: HttpClient){};

  ngOnInit(){
    this.http.get("http://localhost:3000/api/foods/getFood")
    .subscribe((foodData: any) => {
      this.foods = foodData;
      console.log(this.foods);
    }
    );
  }


  name:string ;
  cost:string ;
  id:string ;

  deleteFood(){
    alert("Delete Called!!!");
  }

  addFood(){
    console.log(this.name + this.cost + this.id);

    const foodData = new FormData();
    foodData.append("name", this.name);
    foodData.append("cost", this.cost);
    foodData.append("foodId", this.id);

    this.http.post<{message : string}>("http://localhost:3000/api/foods/addFood" , foodData)
    .subscribe(res => {
      console.log(res);
      alert(res.message);
    });
    this.http.get("http://localhost:3000/api/foods/getFood")
    .subscribe((foodData: any) => {
      this.foods = foodData;
      console.log(this.foods);
    }
    );
  }

}
