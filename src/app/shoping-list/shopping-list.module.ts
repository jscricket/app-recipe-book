import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ShopingEditComponent } from './shoping-edit/shoping-edit.component';
import { ShoppingListComponent } from './shoping-list.component';
import { ShopingListRoutingModule } from './shoping-list-routing.module';

@NgModule({
	declarations: [
		ShopingEditComponent,
		ShoppingListComponent,
	],
	imports: [
		CommonModule,
		ShopingListRoutingModule,
		FormsModule
	]

})
export class ShopingListModule { }