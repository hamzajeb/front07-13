import { EmployeComponent } from './employe/employe.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { MatchComponent } from './match/match.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeGuard } from './employe.guard';
const routes: Routes = [
  {path:"",component:AccueilComponent},
  {path:"login",component:LoginComponent},
  {path:"employe",component:EmployeComponent, canActivate:[EmployeGuard]},
  {path:"dashboard",component:DashboardComponent, canActivate:[EmployeGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
