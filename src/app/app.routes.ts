import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./app.component').then(p => p.AppComponent),
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('@pages/dashboard/dashboard.component').then(p => p.DashboardComponent),
            },
        ]
    },
    {
        path: 'auth/login',
        loadComponent: () => import('@pages/auth/login/login.component').then(p => p.LoginComponent),
    },
    {
        path: 'auth/signup',
        loadComponent: () => import('@pages/auth/signup/signup.component').then(p => p.SignupComponent),
    },
    {
        path: '**',
        loadComponent: () => import('@pages/not-found/not-found.component').then(p => p.NotFoundComponent),
    }
];
