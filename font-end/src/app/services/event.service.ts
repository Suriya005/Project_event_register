import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  // --------Event---------------
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
// -----------Faculty----------------
  getFaculty(){
    return this.http.get(environment.serverUrl + `/faculty`)
    .toPromise();
  }

  postFaculty(data:any){
    console.log(data);
    return this.http.post(environment.serverUrl + `/faculty`,data).toPromise();
  }

  editFaculty(data:any){
    return this.http.patch(environment.serverUrl + `/faculty`,data).toPromise();
  }

  deleteFaculty(data:any){
    return this.http.delete(environment.serverUrl + `/faculty`, {
      body: data
   }).toPromise();
  }
// -----------Major------------------
  getMajor(){
    return this.http.get(environment.serverUrl + `/major`)
    .toPromise();
  }

  // postFaculy(data:any){
  //   return this.http.post(environment.serverUrl + `/post/faculty`,data)
  //   .toPromise();
  // }

  getLocation(){
    return this.http.get(environment.serverUrl + `/location`)
    .toPromise();
  }


}
