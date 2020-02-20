import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  //template: `<h1>Hello {{childName}}!</h1>`,
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() childName :string;
}