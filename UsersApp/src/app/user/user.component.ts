import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  collapsed = true;

  @Input()
  user: User;

  constructor() { }

  ngOnInit() {
  }

  collapseToggle() {
    this.collapsed = !this.collapsed;
  }

}
