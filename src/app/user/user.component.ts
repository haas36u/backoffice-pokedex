import { Component, OnInit } from '@angular/core';
import { User} from '../models/user';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }

	ngOnInit() {
		this.getUsers();
	}
	
	users: User[];

	getUsers(): void{
		this.userService.getUsers()
		.subscribe(users => this.users = users);
	}
}