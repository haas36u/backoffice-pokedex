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

	addType (type: Type): Observable<Type> {
		return this.http.post<Type>(this.typeUrl, type, this.httpOptions);
	}

	updateType (type: Type): Observable<any> {
		const url = `${this.typeUrl}/${type.slug}`;
		console.log(url)
		console.log(type)
		return this.http.put(url, type, this.httpOptions);
	}

	deleteType (type: Type | number): Observable<Type> {
		const slug = typeof type === 'number' ? type : type.slug;
		const url = `${this.typeUrl}/${slug}`;
  
		return this.http.delete<Type>(url, this.httpOptions);
	}
}