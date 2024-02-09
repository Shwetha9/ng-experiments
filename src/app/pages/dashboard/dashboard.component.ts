import { Component, Input, OnInit } from '@angular/core';
import { HeaderNav } from 'src/app/models/header-nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  headerLinks: HeaderNav[] = [
    {
      name: 'home',
      route: '/home',
      id: 'home',
    },
    {
      name: 'about',
      route: '/about',
      id: 'about',
    },
    {
      name: 'dashboard',
      route: '/dashboard',
      id: 'dashboard',
    },
    {
      name: 'contact',
      route: '/contact',
      id: 'contact',
    },
  ];

  // Save these in a state somewhere
  user = 'Jake';
  userMessage = '';

  ngOnInit(): void {
    this.userMessage = `Welcome back, ${this.user}!`;
  }
}
