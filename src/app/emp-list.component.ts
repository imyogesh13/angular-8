import {Component, OnInit} from '@angular/core';
import{ EmployeeService} from './employee.service';

@Component({
  selector :"app-emp-list",
  templateUrl: "./emp-list.component.html"
})

export class EmpListComponent implements OnInit{
  public employee =[];
   constructor(private _empService :EmployeeService){}
   
   ngOnInit(){
     this.employee = this._empService.getEmployee();
   }
}
