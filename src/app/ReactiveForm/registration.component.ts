import { Component } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html"
})
export class RegistrationComponent {
  
  constructor(private fb: FormBuilder) {}
  ngOnInit() {}
  registrationForm = this.fb.group({
    userName : [''],
    password : [''],
    confirmPassword : [''],
    address : this.fb.group({
      city : [''],
      state : [''],
      postalCode : ['']
    })
  });
  // registrationForm = new FormGroup({
  //   userName: new FormControl(""),
  //   password: new FormControl(""),
  //   confirmPassword: new FormControl(""),
  //   address: new FormGroup({
  //     city: new FormControl(""),
  //     state: new FormControl(""),
  //     postalCode: new FormControl("")
  //   })
  // });
  loadAPIData() {
    // this.registrationForm.setValue({
    //   userName: 'Yogesh',
    //   password: 'test',
    //   confirmPassword: 'test',
    //   address: {
    //     city: 'Pune',
    //     state: 'MH',
    //     postalCode: 541822
    //   }
    // });
    this.registrationForm.patchValue({
      userName: 'Yogesh',
      password: 'test',
      confirmPassword: 'test'
    });
  }
}
