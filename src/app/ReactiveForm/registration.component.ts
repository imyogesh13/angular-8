import { Component } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html"
})
export class RegistrationComponent {
  
  constructor(private fb: FormBuilder) {}
  ngOnInit() {}
  registrationForm = this.fb.group({
    userName : ['', [Validators.required, Validators.minLength(3)]],
    password : [''],
    confirmPassword : [''],
    address : this.fb.group({
      city : [''],
      state : [''],
      postalCode : ['']
    })
  });
  get userName (){ 
    return this.registrationForm.get('userName');
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
      userName: 'Yogesh',
      password: 'test',
      confirmPassword: 'test'
    });
  }
}
