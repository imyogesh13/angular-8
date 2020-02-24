import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector :"app-departmentdetails",
  templateUrl: "./departmentdetails.component.html",
})

export class DepartmentDetailsComponent{
  public departmetId = '';
   constructor(private route:ActivatedRoute){
   }
   ngOnInit(){
     this.departmetId = this.route.snapshot.paramMap.get("id");
   }
}