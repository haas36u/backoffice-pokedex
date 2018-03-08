import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { Type } from '../models/type';
import { PokemonService } from '../services/pokemon.service'; 
import { TypeService } from '../services/type.service'; 
import { Location } from '@angular/common';
import { ActivatedRoute, ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-pokemon-edit',
  templateUrl: './pokemon-edit.component.html',
  styleUrls: ['./pokemon-edit.component.css']
})
export class PokemonEditComponent implements OnInit {

	@Input() pokemon : Pokemon;

  	constructor(
		  private pokemonService: PokemonService,
		  private typeService: TypeService,
		  private location: Location,
		  private route: ActivatedRoute,
		) { }

  	ngOnInit() {
		this.getPokemon();
		this.getTypes();
	  }
	  
	types: Type[];

	getPokemon(): void{
		const slug = this.route.snapshot.paramMap.get('slug');
		if(slug) this.pokemonService.getPokemon(slug).subscribe(pokemon => this.pokemon = pokemon);
		else {
			this.pokemon = new Pokemon();
		}
	}

	getTypes(): void {
		this.typeService.getTypes()
		.subscribe(types => this.types = types);
	}
	
	goBack() : void {
		this.location.back();
	}
	
	updatePokemon(): void {
		console.log(this.pokemon)
		if (typeof this.pokemon._id !== 'undefined') {
			this.pokemonService.updatePokemon(this.pokemon).subscribe(() => this.goBack());
		} else {
			this.pokemonService.addPokemon(this.pokemon).subscribe(() => this.goBack());
		}
	}

	onTypeChange(type: Type): void {
		console.log(this.pokemon)
		if (typeof this.pokemon.types == 'undefined') this.pokemon.types = [];
		let nbTypes = this.pokemon.types.length;

		for (let i = 0; i < nbTypes; i++) {
		
			if (this.pokemon.types[i] == type.slug) {
				this.pokemon.types.splice(i, 1);
			} else if(i == nbTypes -1){
				this.pokemon.types.push(type.slug);
				break;
			}
		}

		if (nbTypes == 0) { 
			this.pokemon.types.push(type.slug);
		}

		console.log(this.pokemon.types)
	}
}

