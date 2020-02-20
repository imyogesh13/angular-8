import {Component} from '@angular/core';

@Component({
  selector : 'app-test',
  templateUrl :'./test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent {
public name ="txtname";
myid="testid";
public successClass = "text-success";
textSpecial ="text-special";
hasError : boolean = true;
isSpecial =true;

message ={
  "text-success" : !this.hasError,
  "text-danger" : this.hasError,
  "text-special" :this.isSpecial
}
}