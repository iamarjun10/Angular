import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IEmployee } from './model/employee';

import { TypicodePost } from './model/post';
import { TypicodePostInputParameter } from './model/typicodePostInputParameter';
import { TypicodePostResponse } from './model/typicodePostResponse';

import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  
  private _url: string = '/assets/data/employees.json';
  private typicodePost: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  }

  //get posts from typicode using get http method  
  getPostByParameter(): Observable<TypicodePost[]> {
    let param1 = new HttpParams().set('userId','1');
    return this.http.get<TypicodePost[]>(this.typicodePost,{params:param1});
  }  
  
  postOnTypicode(TypicodePostInputParameter:TypicodePostInputParameter): Observable<TypicodePostResponse[]> {
    return this.http.post<TypicodePostResponse[]>(this.typicodePost,TypicodePostInputParameter);
  }

  getData() {
    return {
      name: 'Arjun',
      surname: 'Naik',
      age: 24
    }
  }
}











    // return [
    //   { id: 1, name: "Arjun", age: 24 },
    //   { id: 2, name: "subham", age: 24 },
    //   { id: 3, name: "saidatta", age: 24 },
    //   { id: 4, name: "khushboo", age: 24 },
    //   { id: 5, name: "Natasha", age: 24 }
    // ]