import {Component} from '@angular/core';
import {EnrollmentService} from './enrollment.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {User} from './user';
import {Observable, throwError} from 'rxjs';
import  {catchError} from 'rxjs/operators';
@Component({
  selector :"app-tdpdemo",
  templateUrl: "./tdpdemo.component.html"
})

export class TdpDemoComponent{

  public topics =['Asp.net MVC', 'Java', 'SQl server', 'C#'];
  public userModel = new User("Rob","rob@gmail.com",1234567890,'','morning',false);
   constructor(private _enrollService: EnrollmentService){
   }
   ngOnInit(){
   }
   onSubmit(){
     this._enrollService.enroll(this.userModel)
     .subscribe(data=> console.log("Success!", data))
     .pipe(catchError(this.errorHandler));

     errorHandler(error:HttpErrorResponse){
    return throwError(error.message || "Server error");
  }
   }
}
