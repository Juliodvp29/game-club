import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';


import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), provideAuth0({
    domain: 'dev-bdujjz8wx3o6fp0i.us.auth0.com',
    clientId: 'ZcgT9IewmgPe22Yas8dVuc2SrJl1bzYq',
    authorizationParams: {
      redirect_uri: window.location.origin
    },
  }),]
};
