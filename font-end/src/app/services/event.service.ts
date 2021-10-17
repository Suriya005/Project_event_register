import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  // ข้อมูลกิจกรรม
  getEventList(){
    return this.http.get(environment.serverUrl + `/get_event_list`)
    .toPromise();
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


}
