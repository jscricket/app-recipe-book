import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../shared/ingredients.model';
import { Recipe } from './../recipe/recipe.model';

@Injectable()
export class RecipeService {
	recipeChanges = new Subject<Recipe[]>();
	private recipes: Recipe[] = [
		new Recipe("Smoked ham",
			"This is the Smoked ham",
			"http://www.seriouseats.com/images/2014/12/20141217-tenderloin-roast-recipe-food-lab-primary.jpg",
			[
				new Ingredient("Meat", 1),
				new Ingredient("Bread", 2),
			]
		),
		new Recipe('Soup with sausages',
			'This is the Soup with sausages ',
			'http://cdn-04.independent.ie/incoming/article29621649.ece/2ead1/AUTOCROP/h342/sc.jpg',
			[
				new Ingredient("Sausages", 4),
				new Ingredient("Potato", 6),
				new Ingredient("Carrot", 1),
				new Ingredient("Paprika", 5),
				new Ingredient("Bean", 20),
				new Ingredient("Tomato paste", 2)
			]
		)
	];

	constructor(private shoppingListService: ShoppingListService) { }

	getRecipes() {
		return this.recipes.slice();
	}
	 
	getRecipe(index: number){
		return this.recipes[index];
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]) {
		this.shoppingListService.onIngredientsAdded(ingredients);
	}

	onAddRecipe(recipe: Recipe){
		this.recipes.push(recipe);
		this.recipeChanges.next(this.recipes.slice());
	}
	onUpdateRecipe(index: number, newRecipe: Recipe){
		this.recipes[index]= newRecipe;
		this.recipeChanges.next(this.recipes.slice());
	}

	deleteRecipe(id: number){
		this.recipes.splice(id, 1);
		this.recipeChanges.next(this.recipes.slice());
	}
}
