import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { apiService } from "../services/api.service";

@Injectable({
  providedIn: 'root',
})
export class DrinkByIdResolver implements Resolve<any>{
  constructor(private apiService: apiService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.apiService.getDrinkById(route.paramMap.get('idDrink')!)
  }
}
