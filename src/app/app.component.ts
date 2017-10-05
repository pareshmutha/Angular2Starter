import {Component} from "@angular/core"

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.component.html'
})

export class AppComponent {
	pageHeader:string = "Employee Details";
	imagePath:string = "https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
	firstName:string = "Paresh";
	lastName:string = "Mutha";
	isDisabled:boolean = true;
	getFullName():string {
		return this.firstName + " " + this.lastName;
	}

}