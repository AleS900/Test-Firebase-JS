import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CommsService {
  url="https://certi-js-db-default-rtdb.firebaseio.com/"
  constructor(private http: HttpClient) { }

  public getAllVac():Observable<any>{
    return this.http.get(`${this.url}user.json`)
  }

  public getAllUnvac():Observable<any>{
    return this.http.get(`${this.url}user.json`)
  }

  public updateVac(id:string,doses:string):Observable<any>{
    return this.http.patch(`${this.url}user/${id}.json`,{"rol":doses})
  }

  public createPerson(body: any): Observable<any>{
    return this.http.post(
      `${this.url}user.json`,
      body);
  }

  public deletePerson(id: string): Observable<any>{
    console.log("Deleting...")
    return this.http.delete(
      `${this.url}user/${id}.json`);
  }
}