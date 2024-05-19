import { Routes } from '@angular/router';
import { authGuard } from './guard/auth.guard';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app.component').then(p => p.AppComponent),
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('@pages/dashboard/dashboard.component').then(p => p.DashboardComponent),
    canActivate: [authGuard],
    pathMatch: 'full',
  },
  {
    path: 'signup',
    loadComponent: () => import('@pages/signup/signup.component').then(p => p.SignupComponent),
    pathMatch: 'full',
  },
  {
    path: '**',
    loadComponent: () => import('@pages/not-found/not-found.component').then(p => p.NotFoundComponent),
  },


];
