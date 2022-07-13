
import { FormControl, Validators,FormBuilder,FormGroup } from '@angular/forms';
import { Component, OnInit,ViewChild, ElementRef  } from '@angular/core';
import { EmployeeService } from './../employee.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialogue-ajouter-employe',
  templateUrl: './dialogue-ajouter-employe.component.html',
  styleUrls: ['./dialogue-ajouter-employe.component.css']
})
export class DialogueAjouterEmployeComponent implements OnInit {
  form!:FormGroup
  x=1
  login = new FormGroup({
    'FirstName' : new FormControl(null),
    'LastName': new FormControl(null),
    'image1': new FormControl(null)
  })
  constructor(    public dialogRef: MatDialogRef<DialogueAjouterEmployeComponent>,private router: Router,private formBuilder:FormBuilder,private employeeService:EmployeeService) { 
    this.form=this.formBuilder.group({
      ID:[''],
      FirstName:[''],
      LastName:[null],
      image1:[null],

      })
  }
  

  ngOnInit(): void {
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
  insertProduit(){
    var formData:any=new FormData();
    formData.append("f_name",this.form.value.FirstName);
    formData.append("l_name",this.form.value.LastName);
    formData.append("image",this.file1);
    this.x=0;
     this.employeeService.ajouterEmploye(formData).subscribe(res=>{
      console.log(res);
      
      this.dialogRef.close();

      console.log("KKKK");

    
     });

  }

}
