import { AuthUser } from '@/app/models/AuthUser';
import { AuthenticationService } from '@/app/services/authentication.service';
import { Component, Input, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {

  public auth = inject(AuthenticationService)
  @Input() user!: AuthUser;

  constructor() { }

  ngOnInit() {

  }

  logout() {
    this.auth.logout()
  }

}
