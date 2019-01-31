import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    login: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(private accountService: AccountService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.loginForm.valid) {
      this.accountService.login(this.loginForm.value.login, this.loginForm.value.password).subscribe(
      (result) => {
        this.router.navigate(['/']);
        window.location.reload();
        // this.ngOnInit(); // for reload page on all browser
      },
      (err) => {
        alert('error!');
        console.log(err);
      });
    }
  }
}
