import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { DataService } from "../services/data.service";

@Injectable()
export class UserGuard implements CanActivate{

    constructor(private router: Router,
    private dataService: DataService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
       return confirm('Are you sure you want to go?');

       if (!this.dataService.isLoggedIn()) {
             this.router.navigate(['./login'])
             return false;
           }
           return true;
    }
}
