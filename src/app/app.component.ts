import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	feature: string =''; 

	ngOnInit(){
		firebase.initializeApp({
			apiKey: "AIzaSyBk8xI4fEQxXv0Htf5wVyYoaQ5CjczcGek",
			authDomain: "ng-recipe-book-39bb1.firebaseapp.com"
		})
	}

	onGetFeature(feature){
		this.feature = feature;
	}
}
