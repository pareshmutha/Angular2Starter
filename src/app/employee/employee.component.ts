import {Component} from '@angular/core'

@Component({

	selector:'my-employee',
	templateUrl:'app/employee/employee.component.html',
	//styles:['table{color:red}']
	styleUrls:['app/employee/employee.component.css']
})

export class EmployeeComponent{
	firstName:string='Paresh';
	lastName:string='Mutha';
	age:number=27;
	gender:string='Male';

}