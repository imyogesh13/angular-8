import { Injectable } from '@angular/core';
@Injectable()

export class EmployeeService {
  private employee =[
    {"id":1,"name":"Smith","age":29},
    {"id":1,"name":"virat","age":30},
    {"id":1,"name":"Kane","age":29},
    {"id":1,"name":"Jow root","age":28}
  ]
  constructor(){

  }
  ngOnInit(){

  }
  getEmployee(){
    return this.employee;
  }
}
