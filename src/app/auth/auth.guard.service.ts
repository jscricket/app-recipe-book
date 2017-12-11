import { RouterStateSnapshot, ActivatedRouteSnapshot, CanLoad } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Route } from '@angular/router/src/config';

@Injectable()
export class AuthGuard implements CanLoad {
	constructor(private authService: AuthService){}

	canLoad(route: Route)
	{
		return this.authService.isAuthenticated();
	}

}