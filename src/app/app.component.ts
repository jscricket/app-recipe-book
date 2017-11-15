import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	feature: string =''; 

	onGetFeature(feature){
		this.feature = feature;
	}
}
