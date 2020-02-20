import {Component} from '@angular/core';

@Component({
  selector : 'app-test',
  templateUrl :'./test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent {
public name ="txtname";
public myid="testid";
public successClass = "text-success";
public textSpecial ="text-special";
public hasError : boolean = true;
public isSpecial =true;
public bindMsg :string ="";
  message ={
    "text-success" : !this.hasError,
    "text-danger" : this.hasError,
    "text-special" :this.isSpecial
  }

  ShowMsg(event)
  {
    console.log(event);
  }

  logMessage(value){
    console.log(value);
  }
}