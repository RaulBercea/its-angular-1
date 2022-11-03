import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class apiService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Uses cocktaildb to search for all the drinks that start with a letter
   * @param firstLetter: the letter that the cocktail should start with
   * @returns the json file from the api with all the cocktails that start with a letter
   */
  searchCocktailByFirstLetter(firstLetter: string) {
    return this.httpClient.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`
    );
  }

  /**
   * Uses Cocktail db to search for a cocktail by name
   * @param cocktailName: the name of the cocktail to search
   * @returns the json file from the api containing the cocktail
   */
  searchCocktailByName(cocktailName: string) {
    return this.httpClient.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`
    );
  }

  /**
   * Uses cocktail db to search for a random cocktail
   * @returns a json file from the api with a random cocktail
   */
  searchRandomCocktail() {
    return this.httpClient.get(
      `https://www.thecocktaildb.com/api/json/v1/1/random.php`
    );
  }
}
