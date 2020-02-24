import {Component} from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector :"app-departmentlist",
  templateUrl: "./departmentlist.component.html"
})

export class DepartmentListComponent{
  
  public departments = [ 
    {"deptId":1, deptname:"Asp.Net MVC"},
    {"deptId":2, deptname:"Java"},
    {"deptId":3, deptname:"SQL Server"},
    {"deptId":4, deptname:"Angular"}
    ];
  constructor(private router:Router){

  }
   ngOnInit(){
   }
   onSelect(dept){
     this.router.navigate(['/departments',dept.deptId]);
   }
}