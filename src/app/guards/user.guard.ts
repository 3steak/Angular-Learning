import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';
export const userGuard: CanActivateFn = (route, state) => {
  const userSvc = inject(UserService);
  const router = inject(Router);
  if (!userSvc.getUsername()) {
    router.navigate(['/']).then(() => false);
  }

  return true;
}