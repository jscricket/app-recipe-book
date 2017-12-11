import { NgModule } from "@angular/core";

import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from './../shared/shared.module';
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { AuthGuard } from "../auth/auth.guard.service";
import { AuthService } from "../auth/auth.service";
import { HttpService } from "../services/http-service";
import { RecipeService } from "../services/recipe.service";
import { ShoppingListService } from "../services/shopping-list.service";

@NgModule({
	declarations: [
		HomeComponent,
		HeaderComponent
	],
	imports: [
		SharedModule,
		AppRoutingModule
	],
	exports: [
		HeaderComponent,
		AppRoutingModule
	],
	providers: [
		ShoppingListService, 
		RecipeService,
		HttpService,
		AuthService,
	]
})
export class CoreModule {}