import { Component, OnInit } from '@angular/core';
import { LoginService } from '../auth.service';
import { RestService } from '../rest.service';

@Component({
  selector: 'business-component',
  templateUrl: 'business.component.html',
  styleUrls : ['./business.component.css']
})

export class BusinessComponent implements OnInit {
  constructor(private loginService: LoginService, private restService: RestService) { }

  restInfo:any;

  ngOnInit() {
    this.restInfo = this.restService.getMenuInfo();
    //alert(this.restInfo.restId);


  }
}
