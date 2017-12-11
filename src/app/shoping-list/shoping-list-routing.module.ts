import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ShoppingListComponent } from './shoping-list.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { SigninComponent } from '../auth/signin/signin.component';

const shopingListRoutes: Routes = [
	{ path: '', component: ShoppingListComponent }
]
@NgModule({
	imports: [RouterModule.forChild(shopingListRoutes)],
	exports: [RouterModule]
})
export class ShopingListRoutingModule {}