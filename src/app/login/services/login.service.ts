import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {LoginDto} from "../model/LoginDto";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  basePath = 'https://sure-service.herokuapp.com/api/v1/users/auth/sign-in';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) {

  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error occurred: ${error.error.message}`);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError(() => new Error('Something happened with request, please try again later'));
  }

  sign_in(user: LoginDto): Observable<LoginDto>{
    return this.http.post<LoginDto>(this.basePath, JSON.stringify(user) ,this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
}
