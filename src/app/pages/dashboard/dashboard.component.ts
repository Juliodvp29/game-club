import { LocalStorageService } from '@/app/services/local-storage.service';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  public ls = inject(LocalStorageService)

  constructor() { }

  ngOnInit(): void {
    console.log('Name: ', this.ls.getAuthUser())
  }

}
