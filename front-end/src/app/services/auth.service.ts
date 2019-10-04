import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as AppUtil from '../components/common/App.util';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
authToken: any;
user: any;
  constructor(private http: HttpClient) { }

  registerUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/register', user, {headers: headers})

  }
  authenticateUser(user) {
    let headers = new HttpHeaders().append('Content-Type', 'application/json');
    return this.http.post('users/authenticate', user, {headers: headers})
  }

 

  storeUserData(token, user) {
    localStorage.setItem(AppUtil.AUTH_TOKEN , token);
    localStorage.setItem(AppUtil.USER_INFO , JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }
  
  loadToken() {
    const token = localStorage.getItem(AppUtil.AUTH_TOKEN);
    this.authToken = token;
  }

  loggedIn(){

    if (localStorage.id_token == undefined ){
     return true
    } else {
    const helper = new JwtHelperService();
    return helper.isTokenExpired(localStorage.id_token); 
    }
   }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
  
}
