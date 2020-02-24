import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import {EmpListComponent} from './emp-list.component';
import {EmpDetailsComponent} from './emp-details.component';
const routes:Routes =[
  {path:"employeelist", component: EmpListComponent},
  {path:"employeedetails", component: EmpDetailsComponent}
];
@NgModule({
  imports:[
           RouterModule.forRoot(routes), 
          ],
  exports:[RouterModule]
})

export class AppRoutingModule{}
export const routingComponent =[EmpListComponent, EmpDetailsComponent]; 