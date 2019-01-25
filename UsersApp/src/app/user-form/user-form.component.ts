import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { PeopleService } from '../services/people.service';
import { User } from '../models/user';
import { nameRangeValidators, UserNameValidator } from './userValidators';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit {

  user: User = new User();

  // userForm = new FormGroup({
  //   name: new FormControl(this.user.name),
  //   bYear: new FormControl(this.user.byear),
  //   gender: new FormControl(this.user.gender),
  //   sendMail: new FormControl(this.user.sendMail)
  // });

  userForm = this.fb.group({
    name: [this.user.name, { validators: [Validators.required, nameRangeValidators, UserNameValidator.createValidator(this.peopleService)], updateOn: 'blur' }],
    bYear: [this.user.byear, { validators: [Validators.required, Validators.min(1900), Validators.max(2019)], updateOn: 'blur' }],
    gender: [this.user.gender],
    sendMail: [this.user.sendMail]
  });

  get name() {
    return this.userForm.get('name');
  }

  get bYear() {
    return this.userForm.get('bYear');
  }

  constructor(private peopleService: PeopleService, private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.peopleService.addUser(
        new User(
          0, this.userForm.value.name, this.userForm.value.bYear, this.userForm.value.gender, this.userForm.value.sendMail
        )
      );
    }
  }

  // onSubmit() {
  //   this.peopleService.addUser(this.user);
  // }

}
