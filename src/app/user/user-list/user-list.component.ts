import { Component, effect, ElementRef, viewChild, ViewChild, viewChildren } from '@angular/core';

import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  imports: [],
})
export class UserListComponent {
  protected users: User[] = [];
  userEls = viewChildren<ElementRef>('user');

  constructor(private userService: UserService) {
    effect(() => {
      this.userEls().forEach((el, idx) => {
        setTimeout(() => {
          el.nativeElement.classList.add('users__item--visible');
        }, (idx + 1) * 500);
      });
    });
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe({
        next: this.initUserList.bind(this),
        error: console.error,
      });
  }

  private initUserList(users: User[]): void {
    this.users = users;
  }
}
