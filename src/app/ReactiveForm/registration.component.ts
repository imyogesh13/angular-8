import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
@Component({
  selector :"app-registration",
  templateUrl: "./registration.component.html"
})

export class RegistrationComponent{

  registrationForm = new FormGroup({
    userName : new FormControl(''),
    password : new FormControl(''),
    confirmPassword : new FormControl('')
  });
   constructor(){
   }
   ngOnInit(){
   }
}