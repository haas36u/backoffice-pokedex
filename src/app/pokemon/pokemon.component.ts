import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { Observable } from 'rxjs/Observable';
import { PokemonService } from '../services/pokemon.service';

@Component({
	selector: 'app-pokemon',
	templateUrl: './pokemon.component.html',
	styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

	constructor(private pokemonService: PokemonService) { }

	ngOnInit() {
		this.getPokemons();
	}
	
	pokemons: Pokemon[];

	getPokemons(): void{
		this.pokemonService.getPokemons()
		.subscribe(pokemons => this.pokemons = pokemons);
	}
	  
	delete(pokemon: Pokemon): void {
		var ok = confirm("Voulez-vous supprimer le pokemon : "+ pokemon.name);
		if (ok == true) {
			this.pokemons = this.pokemons.filter(h => h !== pokemon);
			this.pokemonService.deletePokemon(pokemon).subscribe();
		}
	}
}

