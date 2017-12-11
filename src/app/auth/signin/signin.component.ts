import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

	constructor(
		private authService: AuthService,
		private router: Router,
		private route: ActivatedRoute) { }

	ngOnInit() {
	}

	onSignin(form: NgForm) {
		const email = form.value.email;
		const password = form.value.password;
		this.authService.signInUser(email, password);
		this.router.navigate(['/'])
	}

}
