import { Component, OnInit } from '@angular/core';

import { Ingredient } from './../shared/ingredients.model';
import { ShoppingListService } from './../services/shopping-list.service';
@Component({
	selector: 'app-shoping-list',
	templateUrl: './shoping-list.component.html',
	styleUrls: ['./shoping-list.component.css']
})

export class ShoppingListComponent implements OnInit {
	ingredients: Ingredient[];

	constructor(private shoppingListService: ShoppingListService) { }

	ngOnInit() {
		this.ingredients = this.shoppingListService.getIngredients();
		this.shoppingListService.ingredientChanged
			.subscribe(
				(ingredients: Ingredient[]) => {
					this.ingredients = ingredients;
				}
			);
	}

	onEditItem(index: number){
		this.shoppingListService.startedEditing.next(index);
	}

} 
