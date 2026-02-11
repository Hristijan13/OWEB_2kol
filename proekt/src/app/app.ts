import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AuthService } from './auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  constructor(public authService: AuthService) {}

  logout(event: Event) {
    event.preventDefault();
    this.authService.logout();
  }
}