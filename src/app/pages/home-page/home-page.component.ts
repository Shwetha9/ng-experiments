import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true,
})
export class HomePageComponent {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  loginFailed = false; // Property to track login failure

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    const username = this.loginForm.value.username!;
    const password = this.loginForm.value.password!;
    if (this.authService.login(username, password)) {
      this.router.navigate(['/dashboard']);
    } else {
      this.loginFailed = true;
    }
  }
}
