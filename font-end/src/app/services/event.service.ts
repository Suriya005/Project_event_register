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

  getEventAdmin(){
    return this.http.get(environment.serverUrl + `/event/admin`).toPromise();
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

  postMajor(data:any){
    console.log(data);
    return this.http.post(environment.serverUrl + `/major`,data).toPromise();
  }

  editMajor(data:any){
    return this.http.patch(environment.serverUrl + `/major`,data).toPromise();
  }

  deleteMajor(data:any){
    return this.http.delete(environment.serverUrl + `/major`, {
      body: data
   }).toPromise();
  }

  // -----------Location------------------
  getLocation(){
    return this.http.get(environment.serverUrl + `/location`)
    .toPromise();
  }

  postLocation(data:any){
    console.log(data);
    return this.http.post(environment.serverUrl + `/location`,data).toPromise();
  }

  editLocation(data:any){
    return this.http.patch(environment.serverUrl + `/location`,data).toPromise();
  }

  deleteLocation(data:any){
    return this.http.delete(environment.serverUrl + `/location`, {
      body: data
   }).toPromise();
  }

  // -----------Question------------------
  getQuestion(){
    return this.http.get(environment.serverUrl + `/question`)
    .toPromise();
  }

  getQuestionById(data:any){
    return this.http.post(environment.serverUrl + `/question_by_id`,data)
    .toPromise();
  }

  postQuestion(data:any){
    console.log(data);
    return this.http.post(environment.serverUrl + `/question`,data).toPromise();
  }

  editQuestion(data:any){
    return this.http.patch(environment.serverUrl + `/question`,data).toPromise();
  }

  deleteQuestion(data:any){
    return this.http.delete(environment.serverUrl + `/question`, {
      body: data
   }).toPromise();
  }

  // -----------Answer------------------
  getAnswer(){
    return this.http.get(environment.serverUrl + `/answer`)
    .toPromise();
  }

  postAnswer(data:any){
    console.log(data);
    return this.http.post(environment.serverUrl + `/answer`,data).toPromise();
  }

  editAnswer(data:any){
    return this.http.patch(environment.serverUrl + `/answer`,data).toPromise();
  }

  deleteAnswer(data:any){
    return this.http.delete(environment.serverUrl + `/answer`, {
      body: data
   }).toPromise();
  }

  // -----------RegEvent------------------
  getRegEvent(){
    return this.http.get(environment.serverUrl + `/reg_event`)
    .toPromise();
  }

  postRegEvent(data:any){
    console.log(data);
    return this.http.post(environment.serverUrl + `/reg_event`,data).toPromise();
  }

  editRegEvent(data:any){
    return this.http.patch(environment.serverUrl + `/reg_event`,data).toPromise();
  }

  deleteRegEvent(data:any){
    return this.http.delete(environment.serverUrl + `/reg_event`, {
      body: data
   }).toPromise();
  }

// Report 

  getEventReport(data:any){
    return this.http.post(environment.serverUrl + `/admin/report_event`,data).toPromise();
  }

  getAnswerReport(data:any){
    return this.http.post(environment.serverUrl + `/admin/report_answer`,data).toPromise();
  }
  


}
