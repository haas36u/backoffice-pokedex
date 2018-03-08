import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Type } from '../models/type';

@Injectable()
export class TypeService {

  constructor(private http: HttpClient) { }

    private typeUrl = 'http://localhost:8080/types';
    private httpOptions = {
    	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};
	
	getTypes (): Observable<Type[]> {
		return this.http.get<Type[]>(this.typeUrl);
	}

    getType(slug: string): Observable<Type> {
		const url = `${this.typeUrl}/${slug}`;
		return this.http.get<Type>(url);
	}

	deleteType (type: Type | number): Observable<Type> {
		const slug = typeof type === 'number' ? type : type.slug;
		const url = `${this.typeUrl}/${slug}`;
  
		return this.http.delete<Type>(url, this.httpOptions);
	}
}