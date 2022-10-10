import { Component,ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-profiloUtente',
  templateUrl: './profiloUtente.component.html',
  styleUrls: ['./profiloUtente.component.scss']
})

export class profiloUtente{
  jsonIn = {
    nome: '',
    cognome: '',
    tipologia: true,
    ragioneSociale: '',
    tipoVia: '',
    nomeVia: '',
    numeroCivico: 0,
    cap: 0,
    localita: '',
    comune: '',
    provincia: '',
    stato: '',
    email:'',
    telefono: 0,
    pec: '',
    maggiorenne: true,
    sesso: true,
    pIva: '',
    CF: '',
  }

  @ViewChild('profiloUtente') profiloUtente!: NgForm;
  showErrors = false;
  showPassword = false;

  constructor(private router: Router) {}

  signIn() {
    if (this.profiloUtente.form.invalid) {
      this.showErrors = true;
    } else {
      this.router.navigateByUrl('/home');
    }
  }
}


