import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Recipe } from './../recipe.model';
import { RecipeService } from './../../services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

	@Output() recipeWasSelected = new EventEmitter<Recipe>();
	recipes: Recipe[];
	subscription: Subscription;
	

	constructor(
		private recipeService: RecipeService,
		private router: Router,
		private route: ActivatedRoute,
		public authService: AuthService
	) { }

	ngOnInit() {
		this.subscription = this.recipeService.recipeChanges
			.subscribe(
				(recipes: Recipe[]) => {
					this.recipes = recipes;
				}
			)
		this.recipes = this.recipeService.getRecipes();
	}

	onRecipeSelected(recipe: Recipe){
		this.recipeWasSelected.emit(recipe);
	}

	createNewRecipe(){
		this.router.navigate(['new'], { relativeTo: this.route })
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();		
	}

	
}
