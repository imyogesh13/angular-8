import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import {EmpListComponent} from './emp-list.component';
import {EmpDetailsComponent} from './emp-details.component';
import {PageNotFoundComponent} from './pagenotfound.component';
import {DepartmentListComponent} from './departmentlist.component';
import {DepartmentDetailsComponent} from './departmentdetails.component';


const routes:Routes =[
  {path:'', redirectTo:'departmentlist', pathMatch:'full'},
  {path:"departmentlist", component: DepartmentListComponent},
  {path:"employeelist", component: EmpListComponent},
  {path:"employeedetails", component: EmpDetailsComponent},
  {path:"**", component:PageNotFoundComponent}
];
@NgModule({
  imports:[
           RouterModule.forRoot(routes), 
          ],
  exports:[RouterModule]
})

export class AppRoutingModule{}
export const routingComponent =[EmpListComponent, EmpDetailsComponent,PageNotFoundComponent, DepartmentListComponent]; 