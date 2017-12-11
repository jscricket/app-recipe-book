import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from './../../recipe.model';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
// import { RecipeService } from './../../../services/recipe.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
	 @Input()	recipe: Recipe;
	 @Input() index: number;

	constructor(
		private router: Router,
		private authService: AuthService
	) { }

  ngOnInit() {
	}
	
	// onSelect(){
	// 	this.recipeService.recipeItemSelected.emit(this.recipe)
	// }
	onRedirectToRegister(){
		if(!this.authService.isAuthenticated()){
			this.router.navigate(['/signup']);
		}
	}

}
