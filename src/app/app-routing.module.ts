import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkComponent } from './pages/drink/drink.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'drink/:idDrink', component: DrinkComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
