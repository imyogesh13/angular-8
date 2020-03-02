import {Injectable}  from '@angular/core';
import {HttpClient}  from '@angular/common/http';

@Injectable({
  providedIn:"root"
})

export class RegistrationService{
    private _url = "http://localhost:3000/enroll";
  constructor(private _http:HttpClient){}
}