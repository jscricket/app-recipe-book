import { Response } from '@angular/http';
import { Component, Output, EventEmitter } from '@angular/core';

import { HttpService } from '../../services/http-service';
import { RecipeService } from '../../services/recipe.service';
import { AuthService } from '../../auth/auth.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})

export class HeaderComponent {
	constructor(
		private httpService: HttpService,
		public authService: AuthService
	) { }

	// @Output() featureSelected = new EventEmitter<string>();

	// 	onSelect(feature){
	// 		this.featureSelected.emit(feature)
	// 	}

	onSaveRecipes() {
		this.httpService.saveRecipesData()
			.subscribe(
			(response: Response) => console.log(response),
			(error) => console.log(error)
			);
	}

	onFetchData() {
		this.httpService.getRecipeData();
	}

	onLogout(){
		this.authService.logout();
	}

}