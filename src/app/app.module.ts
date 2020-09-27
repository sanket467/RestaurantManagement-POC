import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodComponent } from './Food/food.component';
import {LoginComponent} from './Login/login.component';
import { LandingComponent } from './Landing/landing.component';
import { TableComponent } from './Table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    LoginComponent,
    LandingComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
