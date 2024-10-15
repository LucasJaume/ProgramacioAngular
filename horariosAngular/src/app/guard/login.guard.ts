import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LoginService } from '../servicios/login.service';

export const loginGuard: CanActivateFn = (route, state) => {
  const _loginService=inject(LoginService)

  if (_loginService.estaLogeado()) {
    return true;
  }else{
    return false;
  }



};
