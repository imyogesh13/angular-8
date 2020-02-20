import { Component, Output } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    parentMsg : string = "Message from parent component";
    parentMsg1 : string = "";
}
