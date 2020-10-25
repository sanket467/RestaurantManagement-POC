import { Component, OnInit, Injectable, OnDestroy  } from '@angular/core';
import { LoginService } from '../auth.service';
import { RestService } from '../rest.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'table-cust',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

@Injectable()
export class TableComponent implements OnInit, OnDestroy{
  dashData: any;
  tables = '';
  restInfo: any;

  constructor(private loginService: LoginService, private restService: RestService){};
  ngOnInit(){

  console.log("In Table");
   this.restInfo = this.restService.getTableInfo();
   //this.tables = this.restInfo.tctr;
   this.tables = this.restInfo.table;
  }

  tableModify(){
    console.log(this.tables);
    console.log(this.restInfo.restId);
    this.restService.modifyTable(this.restInfo.restId, this.tables );
  }
    ngOnDestroy(){

    }
  }


