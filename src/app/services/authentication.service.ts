import { Inject, Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { LocalStorageService } from './local-storage.service';
import { Observable, tap } from 'rxjs';

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
      this.router.navigate(['signup'])
    }
  }

  public isAuthenticated(): boolean {
    return this.auth.isAuthenticated$ ? true : false;
  }

  public async logout() {
    this.ls.removeItem('auth-user');
    this.auth.logout({ logoutParams: { returnTo: 'http://localhost:4200/' } });
  }

}
