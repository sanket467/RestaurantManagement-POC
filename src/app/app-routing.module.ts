import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Login/login.component';
import { LandingComponent } from './Landing/landing.component';


const routes: Routes = [
   {path: '', component: LoginComponent},
  {path: 'restaurant', component: LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
