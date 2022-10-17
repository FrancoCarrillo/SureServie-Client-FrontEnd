import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(): boolean {

    let id = localStorage.getItem("id")

    if(id != null){
      this.router.navigate(['/service'])
      return false;
    }

    return true;

  }

}
