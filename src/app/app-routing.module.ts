import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Login/login.component';
import { LandingComponent } from './Landing/landing.component';
import { TableComponent } from './Table/table.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'restaurant', component: LandingComponent},
  {path: 'table', component: TableComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
