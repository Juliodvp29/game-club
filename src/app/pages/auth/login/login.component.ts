import { CommonModule } from '@angular/common';
import { compileNgModule } from '@angular/compiler';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { tap } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {
    auth.isAuthenticated$.pipe(
      tap((res) => {
        console.log('-> ', res, window.location.origin)
      })
    ).subscribe()
  }


}
