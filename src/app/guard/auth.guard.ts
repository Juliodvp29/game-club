import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '@services/local-storage.service';

export const authGuard: CanActivateFn = (route, state) => {

  const ls = inject(LocalStorageService);
  const router = inject(Router);

  let activate = false;

  const isLogged = ls.get('auth-user')

  if (isLogged) {
    activate = true;
  } else {
    router.navigateByUrl('/signup');
  }
  return true;
};
