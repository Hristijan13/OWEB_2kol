import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<string | null>(localStorage.getItem('loggedInUsername'));
  public currentUser$ = this.currentUserSubject.asObservable();

  login(username: string) {
    localStorage.setItem('loggedInUsername', username);
    this.currentUserSubject.next(username);
  }

  logout() {
    localStorage.removeItem('loggedInUsername');
    this.currentUserSubject.next(null);
  }
}