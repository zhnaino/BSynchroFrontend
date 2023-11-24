import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-form',
  
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent {
  userId!: number;
  initialDeposit!: number;
  messageResponse: string | undefined;
  constructor(private accountService: AccountService) {}

  openAccount() {
    this.messageResponse = undefined; 
    this.accountService.openAccount(this.userId, this.initialDeposit).subscribe(
      (response) => {
        console.log(response);
        this.messageResponse = response.message?.Message || 'Account opened successfully';
      },
      (error) => {
        console.error(error);
        this.messageResponse = error.error;
        ;
        ;
      }
    );
  }
  isValidInput(): boolean {
    //userId and initialDeposit is required and not be a string 
    const isUserIdValid = !isNaN(Number(this.userId)) && this.userId !== undefined && this.userId !== null;
    const isInitialDepositValid = !isNaN(Number(this.initialDeposit)) && this.initialDeposit !== undefined && this.initialDeposit !== null;
  
    return isUserIdValid && isInitialDepositValid;
  }
}
