import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html"
})
export class RegistrationComponent {
  registrationForm = new FormGroup({
    userName: new FormControl(""),
    password: new FormControl(""),
    confirmPassword: new FormControl(""),
    address: new FormGroup({
      city: new FormControl(""),
      state: new FormControl(""),
      postalCode: new FormControl("")
    })
  });
  constructor() {}
  ngOnInit() {}

  loadAPIData() {
    this.registrationForm.setValue({
      userName: 'Yogesh',
      password: 'test',
      confirmPassword: 'test',
      address: {
        city: 'Pune',
        state: 'MH',
        postalCode: 541822
      }
    });
  }
}
