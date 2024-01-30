import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, AppRoutingModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {}
