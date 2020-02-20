import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TestComponent } from './test.component';
import { ChildComponent } from './child.component';
import { PipeComponent } from './pipe.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TestComponent, ChildComponent,PipeComponent ],
  bootstrap:    [ AppComponent, PipeComponent ]
})
export class AppModule { 


}
