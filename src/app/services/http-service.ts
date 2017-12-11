import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { RecipeService } from './recipe.service';
import { Recipe } from '../recipe/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class HttpService {

	constructor(
		private http: Http,
		private recipeService: RecipeService,
		private authService: AuthService
	) { }

	saveRecipesData() {
		const token = this.authService.getToken();
		
		return this.http.put('https://ng-recipe-book-39bb1.firebaseio.com/recipes.json?auth=' + token , this.recipeService.getRecipes());
	}

	getRecipeData() {
		const token = this.authService.getToken();

		this.http.get('https://ng-recipe-book-39bb1.firebaseio.com/recipes.json?auth=' + token)
			.map(
				(response: Response) => {
					const recipes: Recipe[] = response.json();
					for (const recipe of recipes) {
						if (!recipe['ingredients']) {
							recipe['ingredients'] = [];
						}
					}
					return recipes;
				}
			)
			.subscribe(
				(recipes: Recipe[]) => {
					this.recipeService.setRecipes(recipes);
				}
			);
	}
}