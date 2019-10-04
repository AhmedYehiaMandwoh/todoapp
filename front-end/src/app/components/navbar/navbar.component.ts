import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService,
              private FlashMessage: NgFlashMessageService,
              private router: Router) { }
  ngOnInit() {
  }

  onLogoutClick() {
    this.authService.logout();
      this.router.navigate(['/login'])
    return false
  }

 }
