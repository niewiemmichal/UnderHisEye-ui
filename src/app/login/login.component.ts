import { Component, EventEmitter, Output } from '@angular/core';

export interface LoginEvent {
  AccountType: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Output()
  loggedIn: EventEmitter<LoginEvent> = new EventEmitter();

  loginButtonClick(name: string, password: string): void {
    if(name.trim().toLowerCase() === 'register'){
      this.loggedIn.emit({AccountType: 'Rejestrator'});
    }
  }
}
