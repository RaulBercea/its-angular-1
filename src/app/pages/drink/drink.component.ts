import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
})
export class DrinkComponent implements OnInit {
  drink: any = {
    ingredients: [],
    instructions: [],
  };

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.route.data.subscribe(({ drink }) => {
      this.drink = drink.drinks[0];
      this.drink.ingredients = [];
      this.drink.instructions = [];
      Object.keys(this.drink).forEach((key) => {
        if (key.startsWith('strIngredient') && this.drink[key]) {
          const index = key.replace('strIngredient', '');
          this.drink.ingredients.push({
            name: this.drink[key],
            measure: this.drink['strMeasure' + index],
          });
        }
        if (key.startsWith('strInstructions') && this.drink[key]) {
          let lang = key.replace('strInstructions', '');
          if (!lang) {
            lang = 'EN';
          }
          this.drink.instructions[lang] = this.drink[key];
        }
      });
    });
  }
}
