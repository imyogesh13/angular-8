import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { forbiddenNameValidators } from "../shared/user-name.validators";
import { PasswordValidators } from "../shared/password.validators";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html"
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  get userName() {
    return this.registrationForm.get("userName");
  }
   get email() {
    return this.registrationForm.get("email");
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registrationForm = this.fb.group(
      {
        userName: [
          "",
          [
            Validators.required,
            Validators.minLength(3),
            forbiddenNameValidators(/password/)
          ]
        ],
        email: [""],
        subscribe: [false],
        password: [""],
        confirmPassword: [""],
        address: this.fb.group({
          city: [""],
          state: [""],
          postalCode: [""]
        })
      },
      { validators: PasswordValidators }
    );

    this.registrationForm.get('subscribe').valueChanges
    .subscribe(checkedValue => {
      const email = this.registrationForm.get("email");
      if(checkedValue)
      {
        email.setValidators(Validators.required);
      }
      else{
        email.clearValidators();
      }
      email.updateValueAndValidity();
    })
  }


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
      userName: "Yogesh",
      password: "test",
      confirmPassword: "test"
    });
  }
}
