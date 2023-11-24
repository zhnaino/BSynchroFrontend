
import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent {
  userId!: number;
  userInfo: any;

  constructor(private accountService: AccountService) {}

  getUserInfo() {
    this.accountService.getUserInfo(this.userId).subscribe(
      (response) => {
        this.userInfo = response;
       
      },
      (error) => {
        console.error(error);
        
      }
    );
  }
}