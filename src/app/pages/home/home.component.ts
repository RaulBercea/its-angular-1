import { Component, OnInit } from '@angular/core';
import { apiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  drinks: any[] = [];
  alphabetArray: string[] = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  firstLetter: string =
    localStorage.getItem('firstLetter') || this.alphabetArray[0];

  constructor(private apiService: apiService) {}

  displayDrinkByLetter(letter: string): void {
    localStorage.setItem('firstLetter', this.firstLetter);
    this.apiService
      .searchCocktailByFirstLetter(letter)
      .subscribe((response: any) => {
        this.drinks = response.drinks;
      });
  }

  ngOnInit(): void {
    this.displayDrinkByLetter(this.firstLetter);
  }
}
