import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {User} from './user';
import {Observable, throwError} from 'rxjs';
import  {catchError} from 'rxjs/operators';

@Injectable({
  providedIn:'root'
})

export class EnrollmentService {

  private _url = "";
  constructor(private http:HttpClient){}
 

 enroll(user: User){
        this.http.post<any>(this._url, user);
 }

}
