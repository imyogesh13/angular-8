import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TestComponent } from './test.component';
import { ChildComponent } from './child.component';
import { PipeComponent } from './pipe.component';
import {EmployeeService} from './employee.service';
import {EmpListComponent} from './emp-list.component';
import {EmpDetailsComponent} from './emp-details.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TestComponent, ChildComponent,PipeComponent, EmpListComponent, EmpDetailsComponent ],
  providers:[EmployeeService],
  bootstrap:    [ AppComponent, PipeComponent ]
})
export class AppModule { 


}
