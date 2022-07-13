
import { FormControl, Validators,FormBuilder,FormGroup } from '@angular/forms';
import { EmployeeService } from './../employee.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Component, OnInit,ViewChild, ElementRef , Inject } from '@angular/core';
@Component({
  selector: 'app-modifier-employe',
  templateUrl: './modifier-employe.component.html',
  styleUrls: ['./modifier-employe.component.css']
})
export class ModifierEmployeComponent implements OnInit {
x=1
  constructor(@Inject(MAT_DIALOG_DATA) public data1: any,private formBuilder:FormBuilder,private employeeService:EmployeeService) {
    this.form=this.formBuilder.group({
      FirstName:[data1.employe[0]],
      LastName:[data1.employe[1]],
      })
   }
  form!:FormGroup
  ngOnInit(): void {

  }
  modifieEmploye(){
    var formData:any=new FormData();
    formData.append("id",this.data1.employe[2]);
    formData.append("new_f_name",this.form.value.FirstName);
    formData.append("new_l_name",this.form.value.LastName);
     this.employeeService.updateEmploye(formData).subscribe(res=>{
      console.log(res);

     });
  }

}
