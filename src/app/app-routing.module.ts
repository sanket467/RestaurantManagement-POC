import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Login/login.component';
import { LandingComponent } from './Landing/landing.component';
import { TableComponent } from './Table/table.component';
import { FoodComponent } from './Food/food.component';
import { MenuComponent } from './Menu/menu.component';
import { BusinessComponent } from './Business/business.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'restaurant', component: LandingComponent},
  {path: 'business', component: BusinessComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
