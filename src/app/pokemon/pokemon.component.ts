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
}

