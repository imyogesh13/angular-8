import {Component, Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector :"app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})

export class ChildComponent{
    @Input()  public childMsg ="";
   @Output() public childEvent = new EventEmitter();
   constructor(){
   }
   ngOnInit(){
    this.childEvent.emit("Data from child component to parent!!")
   }
}
