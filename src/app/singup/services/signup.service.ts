import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {SignUpDto} from "../model/SignUpDto";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  basePath = 'https://sure-service.herokuapp.com/api/v1/clients/sign-up';

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

  sign_up(newUser: SignUpDto): Observable<SignUpDto>{
    return this.http.post<SignUpDto>(this.basePath, JSON.stringify(newUser), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }

}
