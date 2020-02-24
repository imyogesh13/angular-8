import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {IEmployee} from './employee';
import {Observable, throwError} from 'rxjs';
import  {catchError} from 'rxjs/operators';

@Injectable()

export class EmployeeService {

  private _url = "/assets/data/employee.json";
  public employee = [
    {"id":1,"name":"Smith","age":29},
    {"id":1,"name":"virat","age":30},
    {"id":1,"name":"Kane","age":29},
    {"id":1,"name":"Jow root","age":28}
  ];
  constructor(private http:HttpClient){}
 
  getEmployee(){
    return this.employee;
    
  }

  // getEmployee():Observable<IEmployee[]>{
  //   return this.http.get<IEmployee[]>(this._url)
  //   .pipe(catchError(this.errorHandler));
    
  // }
  errorHandler(error:HttpErrorResponse){
    return throwError(error.message || "Server error");
  }
}
