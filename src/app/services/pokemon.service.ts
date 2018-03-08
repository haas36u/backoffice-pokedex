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

	addPokemon (type: Pokemon): Observable<Pokemon> {
		return this.http.post<Pokemon>(this.pokemonsUrl, type, this.httpOptions);
	}

	updatePokemon (type: Pokemon): Observable<any> {
		const url = `${this.pokemonsUrl}/${type.slug}`;
		return this.http.put(url, type, this.httpOptions);
	}

	deletePokemon (type: Pokemon | number): Observable<Pokemon> {
		const slug = typeof type === 'number' ? type : type.slug;
		const url = `${this.pokemonsUrl}/${slug}`;
  
		return this.http.delete<Pokemon>(url, this.httpOptions);
	}
}
