import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') firstForm: NgForm;
  secretQuestion: string = "pet";
  answer: string = "";
  genders = ['Male', 'Female', 'Other'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted: boolean = false;

  suggestUserName() {
    const suggestedName = 'Superuser';

    // this.firstForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   qna:'',
    //   gender: 'male'
    // });
    
    this.firstForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.firstForm.value.userData.username;
    this.user.email = this.firstForm.value.userData.email;
    this.user.secretQuestion = this.firstForm.value.secret;
    this.user.answer = this.firstForm.value.qna;
    this.user.gender = this.firstForm.value.gender;

    this.firstForm.reset();
  }
}
