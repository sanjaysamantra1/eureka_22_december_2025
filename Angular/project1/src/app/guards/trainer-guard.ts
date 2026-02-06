import { CanActivateFn } from '@angular/router';
import { UserInfoService } from '../services/user-info-service';
import { inject } from '@angular/core';

export const trainerGuard: CanActivateFn = (route, state) => {
  let userInfoService = inject(UserInfoService);
  if (userInfoService.userRole === 'teacher') {
    return true;
  } else {
    alert('You are not allowed to this page');
    return false;
  }
};
