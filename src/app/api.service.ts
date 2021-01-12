
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  apiUrl = 'http://localhost:3000/api/'; // API url

  constructor(public http: HttpClient) { }

  // Post request to api to submit
  addPost(data: any) {
    console.log('Submit post in api');
    console.log(data);
    return this.http.post(this.apiUrl,'addemp',data);
  }
}

