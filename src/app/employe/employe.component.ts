import { ModifierEmployeImageComponent } from './../modifier-employe-image/modifier-employe-image.component';
import { DialogueAjouterEmployeComponent } from './../dialogue-ajouter-employe/dialogue-ajouter-employe.component';
import { ModifierEmployeComponent } from './../modifier-employe/modifier-employe.component';
import { Component, OnInit,ViewChild, ElementRef , Inject } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EmployeeService } from './../employee.service';
import { FormControl, Validators,FormBuilder,FormGroup } from '@angular/forms';
import {MatAccordion} from '@angular/material/expansion';
interface listeEmployes {
  ID:string;
  FirstName:string;
  LastName:string;
}
let ELEMENT_DATA: listeEmployes[] = [
];

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  form!:FormGroup
  displayedColumns: string[] = ['ID','LastName', 'FirstName','Action'];
  dataSource:any
  data:any
  listeCategories: any[] = []
  @ViewChild('fileInput1') fileInput1!: ElementRef;
  @ViewChild('search') search!: any;
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
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private _snackBar: MatSnackBar,public dialog: MatDialog,private employeeService:EmployeeService,private formBuilder: FormBuilder) {
    this.form=this.formBuilder.group({
      image1:[null],

      })
    this.AfficherEmploye();
   }

  AfficherEmploye(){
    
    this.employeeService.employee().subscribe((employes: any) => {
      console.log("employes")
      ELEMENT_DATA = employes;
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);

  
   });

   


  //   ELEMENT_DATA =   [{ID: "k4541", LastName: 'jebbour', FirstName: 'hamza'},
  //   {ID: "11de1", LastName: 'moudni', FirstName: 'alae'},
  //   {ID: "w88kw", LastName: 'bakkali', FirstName: 'said'},
  //   {ID: "s5555", LastName: 'jebbour', FirstName: 'rachid'},
  // ];

  }
  data1:any
  List(){
     this.AfficherEmploye()
  }
  uploadImage(){
    var formData:any=new FormData();

    formData.append("image",this.file1);
    // this._snackBar.open('Image of Employee modified', 'OK', {
    //   horizontalPosition: 'center',
    //   verticalPosition: 'top',
    // });
    this.employeeService.match(formData).subscribe(res=>{
      
      this.data1=res
      if(this.data1.id!=null){
      console.log(this.data1.id);
      this.dataSource.filter=this.data1.id.toString()
      }else{
        this._snackBar.open('Employee not exist', 'OK', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        this.AfficherEmploye();
      }
      this.fileAttr1 = "Path of image"
     });
  }
  openDialog() {
    let dialogRef=this.dialog.open(DialogueAjouterEmployeComponent);
    dialogRef.afterClosed().subscribe(() => { this.AfficherEmploye(); } );
  }
 deleteEmploye(id:any){
  var formData:any=new FormData();
  formData.append("id",id);
  console.log("id")
  console.log(id)
  this.employeeService.deleteEmploye(formData).subscribe(res=>{
    console.log(res);
    this.data=res;
    this.AfficherEmploye();
    // this.showSuccess("La suppression est réussite");

  })
}

updateEmploye(employe:any){
  let dialogRef2=this.dialog.open( ModifierEmployeComponent, {
    data: {employe: employe},
  });
  dialogRef2.afterClosed().subscribe(() => { this.AfficherEmploye(); } );

}
updateImageEmploye(employe:any){
  let dialogRef2=this.dialog.open( ModifierEmployeImageComponent, {
    data: {employe: employe},
  });
  dialogRef2.afterClosed().subscribe(() => { this.AfficherEmploye(); } );

}

  ngOnInit(): void {
    this.AfficherEmploye()
  }

}
