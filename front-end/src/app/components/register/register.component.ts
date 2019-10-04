import { Component, OnInit } from '@angular/core';
import { ValidateService } from 'src/app/services/validate.service';
import { AuthService } from 'src/app/services/auth.service';

import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
name: string;
username: string;
email: string;
password: string;

  constructor( private validateService: ValidateService,
               private FlashMessage: NgFlashMessageService,
               private authService: AuthService,
               private router: Router ) { }

  ngOnInit() {
  }

 
  onRegister() {
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    }
    
    // Required Fields
    if(!this.validateService.validateRegister(user)) {
      this.FlashMessage.showFlashMessage({messages: ['Please Fill All Fields'], dismissible: true, timeout: 2000, type: 'danger'})
      return false
    }

    // Validate Email
    if(!this.validateService.validateEmail(user.email)){
      this.FlashMessage.showFlashMessage({messages: ['Please Use A Valid Email'], dismissible: true, timeout: 2000, type: 'danger'})
      return false
    }

    // Register User
    this.authService.registerUser(user).subscribe(data => {
      if((data as any).success) {
        this.FlashMessage.showFlashMessage({messages: ['Registered Successfully'], dismissible: true, timeout: 2000, type: 'success'})
        setTimeout(() => {
          this.router.navigate(['/login'])
        }, 1000) 
      }
    })

  }
}
