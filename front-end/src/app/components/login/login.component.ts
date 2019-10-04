import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username: string;
password:string;
  constructor(private authService: AuthService,
              private FlashMessage: NgFlashMessageService,
              private router: Router) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    }
    this.authService.authenticateUser(user).subscribe(data => {
      if((data as any).success) {
        this.authService.storeUserData((data as any).token, (data as any).user);
        this.FlashMessage.showFlashMessage({messages: ['Login Successfully'], dismissible: true, timeout: 2000, type: 'success'})
        setTimeout(()=> {
          this.router.navigate(['/'])
        }, 1000) 
      } else {
        this.FlashMessage.showFlashMessage({messages: ['Failed To Login'], dismissible: true, timeout: 2000, type: 'danger'})
        setTimeout(()=> {
          this.router.navigate(['/login'])
        }, 1000);
        this.username = '';
        this.password = ''; 
      }
    })

  }
}
