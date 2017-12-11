import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

@NgModule({
	declarations: [
		AppComponent
  ],
  imports: [
		BrowserModule,
		AppRoutingModule,
		HttpModule,
		SharedModule,
		CoreModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
