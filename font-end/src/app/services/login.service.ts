import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  loginUser(body: any) {
    return this.http.post(environment.serverUrl + `/login`, body, {
      observe: 'body',
    });
  }

  registerUser(registerForm: any) {
    return this.http
      .post(environment.serverUrl + `/reg`, registerForm)
      .toPromise();
  }

  getUser(token: any) {
    return this.http.get(environment.serverUrl + `/users`, {
      observe: 'body',
      headers: new HttpHeaders().set('Authorization', token.toString()),
    });
  }

  getUserOnChange(data: any){
    return this.http.post(environment.serverUrl + `/users/search`,data.searchData,{
      observe: 'body',
      headers: new HttpHeaders().set('Authorization', data.token.toString()),
    }).toPromise();
  }

  deleteUser(data: any) {
    return this.http.delete(environment.serverUrl + `/users`, {
      body: data
   }).toPromise();
  }
  updateUser(data: any) {
    return this.http.patch(environment.serverUrl + `/users`, {
      body: data
   }).toPromise();
  }

  verifyToken(token:any){
    // console.log(token)
    return this.http.post(environment.serverUrl + `/verify_token`,token).toPromise();
  };
}
