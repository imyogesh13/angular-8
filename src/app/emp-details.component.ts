import {Component, OnInit} from '@angular/core';
import{ EmployeeService} from './employee.service';

@Component({
  selector :"app-emp-details",
  templateUrl: "./emp-details.component.html"
})

export class EmpDetailsComponent implements OnInit{
  public employee =[];
   constructor(private _empService :EmployeeService){}
   
   ngOnInit(){
     this.employee = this._empService.getEmployee();
    //this._empService.getEmployee()
    //.subscribe(data=> this.employee = data);
   }
}