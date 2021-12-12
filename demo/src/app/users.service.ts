import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userDataClass } from './model/userDataModel'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getUserData(){
    let url="https://jsonplaceholder.typicode.com/todos/";
    return this.http.get(url);
  }

  
  //Gets the data from the service
   getData(body: userDataClass){
    var url = "https://jsonplaceholder.typicode.com/comments"
    
    //Get Request
    //return this.http.get(url);
 
    //Post Request
    return this.http.post<any>(url, body)
  }
  
}
