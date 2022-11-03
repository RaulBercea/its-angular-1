import { Component, OnInit, OnDestroy } from '@angular/core';
import { apiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-featuredDrink',
  templateUrl: './featuredDrink.component.html',
})
export class FeaturedDrinkComponent implements OnInit {
  drink: any = JSON.parse(localStorage.getItem('featuredDrink') || '{}');

  constructor(private apiService: apiService) {}

  displayFeaturedDrink(): void {
    if (Object.entries(this.drink).length === 0) {
      this.apiService.searchRandomCocktail().subscribe((response: any) => {
        this.drink = response.drinks[0];
        localStorage.setItem('featuredDrink', JSON.stringify(this.drink));
      });
    }
  }

  ngOnInit(): void {
    this.displayFeaturedDrink();
  }
}
