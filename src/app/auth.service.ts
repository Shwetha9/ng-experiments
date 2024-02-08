import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Dummy username and password
  private readonly dummyUsername = 'admin';
  private readonly dummyPassword = 'password';

  constructor() {}

  login(username: string, password: string): boolean {
    return username === this.dummyUsername && password === this.dummyPassword;
  }
}
