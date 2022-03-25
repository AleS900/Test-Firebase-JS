import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CommsService {
  url="https://test-angular-2ndtest-default-rtdb.firebaseio.com/"
  constructor(private http: HttpClient) { }

  public getAllVac():Observable<any>{
    return this.http.get(`${this.url}vaccinated.json`)
  }

  public getAllUnvac():Observable<any>{
    return this.http.get(`${this.url}unvaccinated.json`)
  }

  public updateVac(id:string,doses:number):Observable<any>{
    return this.http.patch(`${this.url}unvaccinated/${id}.json`,{"doses":doses})
  }

  public createPerson(body: any): Observable<any>{
    return this.http.post(
      `${this.url}vaccinated.json`,
      body);
  }

  public deletePerson(id: string): Observable<any>{
    console.log("Deleting...")
    return this.http.delete(
      `${this.url}unvaccinated/${id}.json`);
  }
}