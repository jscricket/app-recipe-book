// import { Eventnextter } from '@angular/core';
import { Ingredient } from './../shared/ingredients.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
	// ingredientChanged = new Eventnextter<Ingredient[]>();
	ingredientChanged = new Subject<Ingredient[]>();
	startedEditing = new Subject<number>();
	private ingredients: Ingredient[] = [
		new Ingredient("Apple", 2),
		new Ingredient("Carrot", 4)
	];

	getIngredients(){
		return this.ingredients.slice();
	}

	onIngredientAdded(ingredient: Ingredient) {
		this.ingredients.push(ingredient);
		this.ingredientChanged.next(this.ingredients.slice());
	}

	onIngredientsAdded(ingredients: Ingredient[]){
		this.ingredients.push(...ingredients);
		this.ingredientChanged.next(this.ingredients.slice());
	}

	getIngredient(index: number){
		return this.ingredients[index];
	}

	updatingItem(index: number, newIgredients: Ingredient){
		this.ingredients[index] = newIgredients;
		this.ingredientChanged.next(this.ingredients.slice());
	}

	onDeleteIngredient(index: number){
		this.ingredients.splice(index, 1);
		this.ingredientChanged.next(this.ingredients.slice());
	}

} 