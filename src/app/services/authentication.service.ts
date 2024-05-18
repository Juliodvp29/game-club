import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { LocalStorageService } from './local-storage.service';
import { Observable, tap } from 'rxjs';
import { AuthUser } from '../models/AuthUser';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public ls = inject(LocalStorageService)

  constructor(private auth: AuthService, private router: Router) { }

  public async issLogged() {
    if (this.auth.isAuthenticated$) {
      this.auth.user$.pipe(
        tap((res) => {
          this.ls.setItem('auth-user', res)
          this.router.navigate(['dashboard'])
        })
      ).subscribe()
    } else {
      this.router.navigate(['dashboard'])

    }
  }
}
