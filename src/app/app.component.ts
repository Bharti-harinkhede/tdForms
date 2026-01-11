import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tdForms';

  @ViewChild('signUpForm') signUpForm !: NgForm

  userDetails = {
    userName: 'iamJohnDoe',
    email: 'johndoe@gmail.com',
    secreteQuestion: 'favBook',
    answer: 'The Alchemist',
    modOfContact: 'phone'
  }

  modCon = [{
    contactMode: 'phone',
    id: 123
  },
  {
    contactMode: 'email',
    id: 124

  }
  ]
  onSubmit() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm)
      console.log(this.signUpForm.form.value)

      this.signUpForm.reset()
    }
  }

 patchData(){
  this.signUpForm.form.patchValue(this.userDetails)
 }
}

