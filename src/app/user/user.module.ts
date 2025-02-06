import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';


@NgModule({
  declarations: [],
  imports: [CommonModule, UserListComponent, HttpClientModule],
  exports: [UserListComponent],
  providers: [UserService],
})
export class UserModule { }
