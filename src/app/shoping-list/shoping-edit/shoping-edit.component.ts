import {
	Component,
	OnInit,
	ViewChild,
	ElementRef,
	OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';

import { Ingredient } from './../../shared/ingredients.model';
import { ShoppingListService } from './../../services/shopping-list.service';
@Component({
	selector: 'app-shoping-edit',
	templateUrl: './shoping-edit.component.html',
	styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit, OnDestroy {
	// @ViewChild('nameInput') inputNameValue: ElementRef;
	// @ViewChild('amountInput') amountInputValue: ElementRef;
	@ViewChild('formList') slForm: NgForm;
	subscription: Subscription;
	editMode = false;
	editingItemIndex: number;
	editItem: Ingredient;

	constructor(private shoppingListService: ShoppingListService) { }

	ngOnInit() {
		this.subscription = this.shoppingListService.startedEditing
			.subscribe((index: number) => {
				this.editMode = true;
				this.editingItemIndex = index;
				this.editItem = this.shoppingListService.getIngredient(index);
				this.slForm.setValue({
					'name': this.editItem.name,
					'amount': this.editItem.amount
				})
			});
	}

	onSubmit(form: NgForm) {
		// const ingredItem = new Ingredient(
		// 	this.inputNameValue.nativeElement.value, 
		// 	this.amountInputValue.nativeElement.value);

		const value = form.value;
		const newIngredient = new Ingredient(value.name, value.amount)
		if (this.editMode) {
			this.shoppingListService.updatingItem(this.editingItemIndex, newIngredient);
		} else {
			this.shoppingListService.onIngredientAdded(newIngredient);
		}
		this.editMode = false;
		form.reset();
	}

	onClear() {
		this.editMode = false;
		this.slForm.reset();
	}

	onDelete(){
		this.slForm.reset();
		this.shoppingListService.onDeleteIngredient(this.editingItemIndex);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
