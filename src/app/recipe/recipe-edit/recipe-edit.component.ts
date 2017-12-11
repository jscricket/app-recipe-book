import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
	selector: 'app-recipe-edit',
	templateUrl: './recipe-edit.component.html',
	styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
	id: number;
	editeMode = false;
	recipeForm: FormGroup;

	constructor(
		private route: ActivatedRoute,
		private recipeService: RecipeService,
		private router: Router) { }

	ngOnInit() {
		this.route.params
			.subscribe(
			(params: Params) => {
				this.id = +params['id'];
				this.editeMode = params['id'] != null;
				this.initForm();
			}
			);
	}

	getIngredients(reciepeForm){
		return reciepeForm.get('ingredients').controls
	}

	onAddIngredient() {
		(<FormArray>this.recipeForm.get('ingredients')).push(
			new FormGroup({
				'name': new FormControl(null, Validators.required),
				'amount': new FormControl(null, [
					Validators.required,
					Validators.pattern(/^[1-9]+[0-9]*$/)
				])
			})
		);
	}

	onSubmit() {
		// const newRecipe = new Recipe(
		// 	this.recipeForm.value['name'],
		// 	this.recipeForm.value['imagePath'],
		// 	this.recipeForm.value['description'],
		// 	this.recipeForm.value['ingrediens']
		// );
		if (this.editeMode) {
			this.recipeService.onUpdateRecipe(this.id,  this.recipeForm.value);
		} else {
			this.recipeService.onAddRecipe(this.recipeForm.value);
		}
		this.onCansel();
	}

	onCansel(){
		this.router.navigate(['../'], {relativeTo: this.route});
	}

	onDeleteIngredient(index: number){
		(<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
	}

	private initForm() {
		let recipeName = '';
		let imagePath = '';
		let description = '';
		let recipeIngredients = new FormArray([]);
		
		
		if (this.editeMode) {
			const recipe = this.recipeService.getRecipe(this.id);
			recipeName = recipe.name;
			imagePath = recipe.imagePath;
			description = recipe.description;
			if (recipe['ingredients']) {
				for (let ingredient of recipe.ingredients) {
					recipeIngredients.push(
						new FormGroup({
							'name': new FormControl(ingredient.name, Validators.required),
							'amount': new FormControl(ingredient.amount, [
								Validators.required,
								Validators.pattern(/^[1-9]+[0-9]*$/)
							])
						})
					);
				}
			}
		}

		this.recipeForm = new FormGroup({
			'name': new FormControl(recipeName, Validators.required),
			'imagePath': new FormControl(imagePath, Validators.required),
			'description': new FormControl(description, Validators.required),
			'ingredients': recipeIngredients
		})
	}

}
