import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titolo = 'my-app';

  step: number = 0;

  cambiaTitolo(nome: string): void {
    this.titolo = nome;
  }

  displayNext = ():void =>{
      this.step++;

  }

  displayPrevious = ():void =>{
      this.step--;
  }
}
