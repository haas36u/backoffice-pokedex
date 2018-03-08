import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Pokemon } from '../models/pokemon';

@Injectable()
export class PokemonService {

	constructor(private http: HttpClient) { }

    private pokemonsUrl = 'http://localhost:8080/pokemons';
    private httpOptions = {
    	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};
	
	getPokemons (): Observable<Pokemon[]> {
		return this.http.get<Pokemon[]>(this.pokemonsUrl);
	}

    getPokemon(slug: string): Observable<Pokemon> {
		const url = `${this.pokemonsUrl}/${slug}`;
		return this.http.get<Pokemon>(url);
	}
}
