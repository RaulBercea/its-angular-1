import { Component } from '@angular/core';
import { apiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './searchPage.component.html',
})
export class SearchPageComponent {
  constructor(private apiService: apiService) {}

  searchResults: any[] = [];

  jsonIn = {
    searchInput: '',
  };

  handleSearch(): void {
    this.apiService
      .searchCocktailByName(`${this.jsonIn.searchInput}`)
      .subscribe((response: any) => {
        this.searchResults = response.drinks;

        console.log(this.searchResults);
      });
  }
}
