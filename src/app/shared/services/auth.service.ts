import { Injectable } from '@angular/core';
import { environment } from '@env';
import { DataService } from '@core/services/data.service';
import { map, filter, take } from 'rxjs/operators';

var JWT;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = true;
  // isLoggedIn = this.checkLogin();
  constructor(private dataService: DataService) {

  }

  checkLogin() {
    // Get the JWT token from local storage
    const token = localStorage.getItem(environment.authToken);
    // Check to see if the token exists and if it is expired
    if (token && !JWT.isTokenExpired(token)) {
      return true;
    } else {
      return false;
    }
  }
}
