import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import {EmpListComponent} from './emp-list.component';
import {EmpDetailsComponent} from './emp-details.component';
import {PageNotFoundComponent} from './pagenotfound.component';
import {DepartmentListComponent} from './departmentlist.component';
import {DepartmentDetailsComponent} from './departmentdetails.component';
import {DepartmentsOverviewComponent} from './departments-overview.component';
import {DepartmentsContactComponent} from './departments-contact.component';

const routes:Routes =[
  {path:'', redirectTo:'departments', pathMatch:'full'},
  {path:"departments", component: DepartmentListComponent},
  {
    path:'departments/:id',
    component:DepartmentDetailsComponent,
    children:[
      {path:"overview",component:DepartmentsOverviewComponent},
      {path:"contact",component:DepartmentsContactComponent}
    ]
    },
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
export const routingComponent =[EmpListComponent, EmpDetailsComponent,PageNotFoundComponent, DepartmentListComponent,DepartmentDetailsComponent,DepartmentsOverviewComponent,DepartmentsContactComponent]; 