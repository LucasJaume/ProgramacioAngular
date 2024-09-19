import { CanActivateFn } from '@angular/router';
// import { LoginService } from '../servicios/login.service';
// import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  return true
};
