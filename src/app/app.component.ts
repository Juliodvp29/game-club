import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { NavComponent } from './components/nav/nav.component';
import { AuthUser } from './models/AuthUser';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  public auth = inject(AuthenticationService);
  public ls = inject(LocalStorageService)

  public user!: AuthUser;

  constructor() {
    this.setUser()
  }

  ngOnInit() {
    this.auth.issLogged()
  }

  setUser() {
    this.user = this.ls.getAuthUser()
  }

}
