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
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule, routingComponent} from './app-routing.module';
import {TdpDemoComponent} from './tdpdemo.component';
import {EnrollmentService} from './enrollment.service';

@NgModule({
  declarations: [
     AppComponent, 
     TestComponent,
     ChildComponent,
     PipeComponent,
     EmpListComponent,
     EmpDetailsComponent,
     routingComponent,
     TdpDemoComponent ],
  imports:[
     BrowserModule,
     FormsModule,
     HttpClientModule,
     AppRoutingModule
      ],
  providers:[EmployeeService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 


}
