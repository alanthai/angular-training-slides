import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import UsersService from '../services/users.service';

@Component({
  selector: 'rio-users-list',
  template: `
    <rio-user-list [users]="users"></rio-user-list>`
})
export default class UsersListComponent {
  public users: any;
  private subscription: any;

  constructor(private usersService: UsersService /*, load route service */) {}

  ngOnInit() {

  }

  ngOnDestroy() {

  }
}
