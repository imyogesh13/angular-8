import {Component} from '@angular/core';
import {Router, ActivatedRoute,ParamMap} from '@angular/router'

@Component({
  selector :"app-departmentlist",
  templateUrl: "./departmentlist.component.html"
})

export class DepartmentListComponent{
  public selectedId;
  public departments = [ 
    {"deptId":1, deptname:"Asp.Net MVC"},
    {"deptId":2, deptname:"Java"},
    {"deptId":3, deptname:"SQL Server"},
    {"deptId":4, deptname:"Angular"}
    ];
  constructor(private router:Router, private route:ActivatedRoute){

  }
   ngOnInit(){
      this.route.paramMap.subscribe(params=>{
       let id = parseInt(params.get("id"));
       this.selectedId = id;
     })
   }
   onSelect(dept){
     this.router.navigate(['/departments',dept.deptId]);
   }

   isSelected(dept)
   {
     console.log(this.selectedId);
     console.log(dept.id);
     return dept.deptId === this.selectedId;
   }
}