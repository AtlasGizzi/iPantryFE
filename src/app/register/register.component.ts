import { Component, Input, OnInit } from '@angular/core';
import { Account } from '../data/account';
import { RegisterService } from '../Service/register.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  @Input() accountFromHomeComponent: any;
  //authService.login(account);

  account: Account[] = []
  firstName: string = ""
  lastName: string = ""
  email: string = ""
  password: string = ""
  //pantry: string = ""
  constructor(public registerService: RegisterService) {
    //watchAccount method
  }
  
  registerAccount( ): void {
    
    this.registerService.SubmitRegister(this.firstName, this.lastName, this.email, this.password)
  
      console.log(this.firstName)
  
  }
 
}
