import { AuthUser } from '@/app/models/AuthUser';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {

  @Input() user!: AuthUser;

  constructor() { }

  ngOnInit() {
    console.log('Avatar: ', this.user.picture)
  }

}
