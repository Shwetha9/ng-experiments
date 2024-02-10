import { Component, Input, OnInit } from '@angular/core';
import { HeaderNav } from 'src/app/models/header-nav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() navData: HeaderNav[] = [];
  @Input() userMessage = '';
  menuActive = false;
  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
  ngOnInit(): void {}
}
