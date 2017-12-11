import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { AuthGuard } from './auth/auth.guard.service';
import { HomeComponent } from './core/home/home.component';

const AppRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'recipes', loadChildren: './recipe/recipes.module#RecipesModule', canLoad: [AuthGuard] },
	{ path: 'shopping-list', loadChildren: './shoping-list/shopping-list.module#ShopingListModule', canLoad: [AuthGuard]},
	{ path: '', loadChildren: './auth/auth.module#AuthModule'},
]



@NgModule({
	imports: [RouterModule.forRoot(AppRoutes, {preloadingStrategy: PreloadAllModules})],
	exports: [RouterModule],
	providers: [AuthGuard]
})
export class AppRoutingModule {

}