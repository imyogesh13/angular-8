import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector :"app-departmentdetails",
  templateUrl: "./departmentdetails.component.html",
  
})

export class DepartmentDetailsComponent{
  public departmetId ;
   constructor(private route:ActivatedRoute, private router:Router){
   }
   ngOnInit(){
     let id = parseInt( this.route.snapshot.paramMap.get("id"));
     this.departmetId = id;
   }
   goPrevious(){
      let id = this.departmetId - 1;
      console.log(id);

      this.router.navigate(['/departments',id]);
       //this.router.navigate(['/departments',dept.deptId]);
   }

   goNext(){
      let id = this.departmetId +1;
      this.router.navigate(['/departments',id]);
   }
   goBackToDeptList(){
     this.router.navigate(['/departments']);
   }
}