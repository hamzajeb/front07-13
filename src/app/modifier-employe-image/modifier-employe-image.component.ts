import { Component, OnInit,ViewChild, ElementRef , Inject } from '@angular/core';
import { FormControl, Validators,FormBuilder,FormGroup } from '@angular/forms';
import { EmployeeService } from './../employee.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ImageChangeComponent } from './../dialog/image-change/image-change.component';
@Component({
  selector: 'app-modifier-employe-image',
  templateUrl: './modifier-employe-image.component.html',
  styleUrls: ['./modifier-employe-image.component.css']
})
export class ModifierEmployeImageComponent implements OnInit {
  durationInSeconds = 5;
  form!:FormGroup
  x=1
  constructor(@Inject(MAT_DIALOG_DATA) public data1: any,private _snackBar: MatSnackBar,private formBuilder:FormBuilder,private employeeService:EmployeeService) {
    this.form=this.formBuilder.group({
      image1:[null],

      })
   }
   @ViewChild('fileInput1') fileInput1!: ElementRef;
   file1:any;
   fileAttr1 = "Path of image"
   uploadFileEvt1(imgFile: any) {
     this.file1=imgFile.target.files[0]
     if (imgFile.target.files && imgFile.target.files[0]) {
       this.fileAttr1 = '';
       Array.from(imgFile.target.files).forEach((file: any) => {
         this.fileAttr1 += file.name;
       });
       
       let reader = new FileReader();
       reader.onload = (e: any) => {
         let image = new Image();
         image.src = e.target.result;
         image.onload = (rs) => {
           let imgBase64Path = e.target.result;
         };
       };
       reader.readAsDataURL(imgFile.target.files[0]);
       this.fileInput1.nativeElement.value = '';
     } else {
       this.fileAttr1 = 'Choose File';
     }
   }
  modifieImage(){
    var formData:any=new FormData();
    formData.append("id",this.data1.employe[2]);
    formData.append("new_image",this.file1);
    this._snackBar.open('Image of Employee modified', 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
    this.employeeService.updateEmployeImage(formData).subscribe(res=>{
      console.log(res);


     });
  }
  ngOnInit(): void {
  }

}
