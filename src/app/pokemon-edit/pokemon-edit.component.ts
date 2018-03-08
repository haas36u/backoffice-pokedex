import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service'; 
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
		  private location: Location,
		  private route: ActivatedRoute,
		) { }

  	ngOnInit() {
		this.getPokemon();
  	}

	getPokemon(): void{
		const slug = this.route.snapshot.paramMap.get('slug');
		if(slug) this.pokemonService.getPokemon(slug).subscribe(pokemon => this.pokemon = pokemon);
		else {
			this.pokemon = new Pokemon();
		}
	}
	
	goBack() : void {
		this.location.back();
	}
	
	updatePokemon(): void {
		if (typeof this.pokemon._id !== 'undefined') {
			this.pokemonService.updatePokemon(this.pokemon).subscribe(() => this.goBack());
		} else {
			this.pokemonService.addPokemon(this.pokemon).subscribe(() => this.goBack());
		}	
	}
}

