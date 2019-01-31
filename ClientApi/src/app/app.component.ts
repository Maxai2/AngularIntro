import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ClientApi';
  isAuth: boolean;

  constructor (private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {
    this.isAuth = this.accountService.isAuth();
  }

  logout() {
    this.accountService.logout();
    this.router.navigate(['/']);
    window.location.reload();
  }
}
