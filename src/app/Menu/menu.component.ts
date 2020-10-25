import { Component, Injectable, OnInit, OnDestroy } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HttpClient } from "@angular/common/http";
import { Food } from '../Food/food.model';
import { RestService } from '../rest.service';

@Component({
  selector: 'menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

@Injectable()
export class MenuComponent implements OnInit {

  foods: Food[] = [];
  restInfo:any;
  foodName = '';
  foodCost = '';
  foodId = '';
  restId = '';

  constructor(private http: HttpClient, private restService: RestService){};

  ngOnInit(){

    this.restInfo = this.restService.getMenuInfo();
    this.restId = this.restInfo.restId;
    console.log("In food " + this.restInfo.restId);
    this.loadContents(this.restInfo.restId);

  }

  loadContents(restParam){
    this.http.get("http://localhost:3000/api/foods/getFood/" + restParam)
    .subscribe((foodData: any) => {
      this.foods = foodData;
      console.log(this.foods);
    }
    );
  }

  openFoodModal(){
    let btn = document.getElementById("foodModal");
    //btn.className('modal is-active');
    btn.className = 'modal is-active';
  }

  closeFoodModal(){
    let btn = document.getElementById("foodModal");
    //btn.className('modal is-active');
    btn.className = 'modal';
  }

  addFood(){
    //alert("clicked");
    const foodData = new FormData();
    foodData.append("id", this.foodId);
    foodData.append("fname", this.foodName);
    foodData.append("cost", this.foodCost);
    foodData.append("restId", this.restId);

    this.http.post('http://localhost:3000/api/foods/addFood', foodData)
    .subscribe(result => {
      console.log(result);
      this.loadContents(this.restId);
      this.closeFoodModal();
    });



  }

  deleteFood(id){
      console.log(id);
      this.http.delete('http://localhost:3000/api/foods/delFood/' +  id + '/' + this.restId)
      .subscribe(result => {
        console.log(result);
        alert("Deleted!!");
        this.loadContents(this.restId);

      })
  }

}
