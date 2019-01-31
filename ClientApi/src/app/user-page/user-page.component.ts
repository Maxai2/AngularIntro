import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { CustomAccount } from '../models/account';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  account: CustomAccount;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getAccount().subscribe(
    (result) => {
      this.account = result;
    },
    (error) => {
      console.log(error);
    });
  }

}
