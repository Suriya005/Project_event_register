import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  // ข้อมูลกิจกรรม
  getEvent(){
    return this.http.get(environment.serverUrl + `/event`).toPromise();
  }

  postEvent(data:any){
    console.log(data);
    return this.http.post(environment.serverUrl + `/event`,data).toPromise();
  }

  editEvent(data:any){
    return this.http.patch(environment.serverUrl + `/event`,data).toPromise();
  }

  deleteEvent(data:any){
    return this.http.delete(environment.serverUrl + `/event`, {
      body: data
   }).toPromise();
  }

  getFaculy(){
    return this.http.get(environment.serverUrl + `/get/faculty`)
    .toPromise();
  }

  getMajor(){
    return this.http.get(environment.serverUrl + `/get/major`)
    .toPromise();
  }

  postFaculy(data:any){
    return this.http.post(environment.serverUrl + `/post/faculty`,data)
    .toPromise();
  }

  getLocation(){
    return this.http.get(environment.serverUrl + `/location`)
    .toPromise();
  }


}
