import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {User} from './user';
import {Observable, throwError} from 'rxjs';
import  {catchError} from 'rxjs/operators';

@Injectable({
  providedIn:'root'
})

export class EnrollmentService {

  private _url = "http://localhost:3000/enroll";
  constructor(private http:HttpClient){}
 

 enroll(user: User){
        return this.http.post<any>(this._url, user)
        .pipe(catchError(this.errorHandler));
 }

errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server error");
  }
}
