import { Component, OnInit } from '@angular/core';
import { Type } from '../models/type';
import { TypeService } from '../services/type.service'; 

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  constructor(private typeService: TypeService) { }
  
	ngOnInit() {
		this.getTypes();
	}

	types: Type[];

	getTypes(): void{
		this.typeService.getTypes()
		.subscribe(types => this.types = types);
  }
  
  delete(type: Type): void {
    var ok = confirm("Voulez-vous supprimer le type : "+ type.name);
		if (ok == true) {
      this.types = this.types.filter(h => h !== type);
      this.typeService.deleteType(type).subscribe();
    }
  }

}
