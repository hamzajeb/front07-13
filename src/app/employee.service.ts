import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  match(formData: any) {
    let headers = new HttpHeaders();
    console.log(this.getToken())
    headers = headers.set('token', this.getToken());


    return this.httpClient.post('http://127.0.0.1:5000/matchv2',formData, { headers: headers });
  }

  constructor( private httpClient: HttpClient) { }
  getLogin(infos: any) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-Type", 'undefined');
    console.log(infos)

    return this.httpClient.post("http://127.0.0.1:5000/login", infos);
  }

  ajouterEmploye(employe:any){
    let headers = new HttpHeaders();
    console.log(this.getToken())
    headers = headers.set('token', this.getToken());
    console.log(headers)
    console.log(employe)
    return this.httpClient.post('http://127.0.0.1:5000/add',employe, { headers: headers });
  }
  msg:any
  route:any
  dialog1(msg: any, route: any) {
    this.msg = msg;
    this.route = route;
  }
  updateEmploye(newE:any){
    let headers = new HttpHeaders();
    console.log(this.getToken())
    headers = headers.set('token', this.getToken());


    return this.httpClient.post('http://127.0.0.1:5000/modify',newE, { headers: headers });
  }
  updateEmployeImage(newE:any){
    let headers = new HttpHeaders();
    console.log(this.getToken())
    headers = headers.set('token', this.getToken());


    return this.httpClient.post('http://127.0.0.1:5000/modifyImage',newE, { headers: headers });
  }
  deleteEmploye(id:any){
    let headers = new HttpHeaders();
    console.log(this.getToken())
    headers = headers.set('token', this.getToken());
    console.log(id)

    return this.httpClient.post('http://127.0.0.1:5000/delete',id, { headers: headers });
  }
  isLoggedin() {
    return localStorage.getItem('Token') != null;
  }
  logOut() {
    return localStorage.clear();
  }
  getToken() {
    return localStorage.getItem('Token') || "";
  }
  employee(){
    let headers = new HttpHeaders();
    console.log(this.getToken())
    headers = headers.set('token', this.getToken());
    console.log(headers)
    // console.log(this.httpClient.get('http://127.0.0.1:5000/getall', { headers: headers }))
    return this.httpClient.get('http://127.0.0.1:5000/getall', { headers: headers });
  }

//   handleError(error: HttpErrorResponse) {
//     return throwError(error);
// }
}
