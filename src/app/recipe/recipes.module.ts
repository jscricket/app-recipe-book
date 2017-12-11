import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeComponent } from './recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [
		RecipeComponent,
		RecipeDetailComponent,
		RecipeEditComponent,
		RecipeItemComponent,
		RecipeListComponent,
		RecipeStartComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		RecipesRoutingModule,
		SharedModule
	]
})
export class RecipesModule {}
