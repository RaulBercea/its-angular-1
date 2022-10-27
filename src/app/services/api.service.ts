import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class apiService {
  constructor(private httpClient: HttpClient) {}

  searchCocktailByFirstLetter(firstLetter: string) {
    return this.httpClient.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`
    );
  }

  searchCocktailByName(cocktailName: string) {
    return this.httpClient.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`
    );
  }
}
