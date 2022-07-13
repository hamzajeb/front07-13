import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeService } from './../employee.service';
import {DialogComponent} from '../dialog/dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new FormGroup({
    'username' : new FormControl(null),
    'password': new FormControl(null)
  })
  form!:FormGroup
  constructor(private router: Router,public dialog: MatDialog,private formBuilder:FormBuilder,private employeeService:EmployeeService) {
    
    this.form=this.formBuilder.group({

      username:[''],
      password:[''],


      })
      console.log(localStorage.getItem('Token')); // retrieve the item
      localStorage.clear();
   }
  hide = true;
  message:any;
  responseData:any;
  ngOnInit(): void {
    localStorage.clear();
  }
  loginFormData(){

    if(this.login.valid){
      var formData:any=new FormData();
      formData.append("username",this.form.value.username);
      formData.append("password",this.form.value.password);
      console.log("hhhh")
      this.employeeService.getLogin(formData).subscribe(result=>{

        this.responseData=result;
        if(this.responseData.token!=null){
          this.router.navigate(['']);
          this.openDialog();
          localStorage.setItem('Token',this.responseData.token);
          
          }else{
            this.message=this.responseData.message;
          }
          
      })
    }
    }
    openDialog() {
      this.dialog.open(DialogComponent);
    }
  }


