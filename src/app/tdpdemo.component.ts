import {Component} from '@angular/core';
import {User} from './user';
@Component({
  selector :"app-tdpdemo",
  templateUrl: "./tdpdemo.component.html"
})

export class TdpDemoComponent{

  public topics =['Asp.net MVC', 'Java', 'SQl server', 'C#'];
  public userModel = new User("Rob","rob@gmail.com",1234567890,'','morning',false);
   constructor(){
   }
   ngOnInit(){
   }
   onSubmit(){
     console.log(this.userModel);
   }
}
