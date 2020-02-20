import {Component} from '@angular/core';

@Component({
  selector :"app-pipe",
  templateUrl: "./pipe.component.html"
})

export class PipeComponent{
  public msg ="Angual practice";
  public jsondata = {
    Id:1, "name": "AAA"
  }
  public date = new Date();
   constructor(){
   }
   ngOnInit(){
   }
}