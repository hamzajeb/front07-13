import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../employee.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { LogOutComponent} from './../dialog/log-out/log-out.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  login:any;
  durationInSeconds = 5;
  constructor(private router: Router,private employeeService:EmployeeService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  testconnexion(){

    this.login=this.employeeService.isLoggedin();
  
    return this.login;//si connecter retourner true sinon false
  }
  Logout(){
    this.employeeService.logOut();
    this.router.navigate(['']);
    this._snackBar.openFromComponent(LogOutComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
