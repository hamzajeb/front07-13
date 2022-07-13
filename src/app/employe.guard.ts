import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeGuard implements CanActivate {
  constructor(private employeeService:EmployeeService,private route:Router){
    
  }
  canActivate(){

    if(this.employeeService.isLoggedin()){
      return true;
    }else{
      this.route.navigateByUrl('');
      return false;
  }
  
}
  
}
