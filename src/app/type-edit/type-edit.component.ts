import { Component, OnInit, Input } from '@angular/core';
import { Type } from '../models/type';
import { TypeService } from '../services/type.service'; 
import { Location } from '@angular/common';
import { ActivatedRoute, ActivationEnd } from '@angular/router';

@Component({
  	selector: 'app-type-edit',
  	templateUrl: './type-edit.component.html',
  	styleUrls: ['./type-edit.component.css']
})
export class TypeEditComponent implements OnInit {

	@Input() type : Type;

  	constructor(
		  private typeService: TypeService,
		  private location: Location,
		  private route: ActivatedRoute,
		) { }

  	ngOnInit() {
		this.getType();
  	}

	getType(): void{
		const slug = this.route.snapshot.paramMap.get('slug');
		if(slug) this.typeService.getType(slug).subscribe(type => this.type = type);
		else {
			this.type = new Type();
		}
	}
	
	goBack() : void {
		this.location.back();
	}
	
	updateType(): void {
		if (typeof this.type._id !== 'undefined') {
			this.typeService.updateType(this.type).subscribe(() => this.goBack());
		} else {
			this.typeService.addType(this.type).subscribe(() => this.goBack());
		}	
	}
}

