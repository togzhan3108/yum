import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipes } from '../services/recipes.model';
@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  apiUrl= 'http://localhost:3000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipes> {
    return this.http.get<Recipes>(this.apiUrl + '/recipes');
  }

  createRecipe(recipe): Observable<Recipes> {
    return this.http.post<Recipes>(this.apiUrl + '/recipes', JSON.stringify(recipe), this.httpOptions);
  }

  getRecipe(id): Observable<Recipes> {
    return this.http.get<Recipes>(this.apiUrl + '/recipes/' + id);
  }

  updateRecipe(id, recipe): Observable<Recipes> {
    return this.http.put<Recipes>(this.apiUrl + '/recipes/' + id,
    JSON.stringify(recipe), this.httpOptions);
  }

  deleteRecipe(id) {
    return this.http.delete<Recipes>(this.apiUrl + '/recipes/' + id);
  }
}
