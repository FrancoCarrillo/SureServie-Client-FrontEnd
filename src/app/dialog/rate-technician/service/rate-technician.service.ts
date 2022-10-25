import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, throwError} from "rxjs";
import {UpdateTechnicianDto} from "../model/updateTechnicianDto";
import {UpdateReservationDto} from "../model/UpdateReservationDto";

@Injectable({
  providedIn: 'root'
})
export class RateTechnicianService {

  basePath = 'https://sure-service.herokuapp.com/api/v1';

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

  updateTechnician(technicianId: number, technicianPutDto: UpdateTechnicianDto){
    return this.http.put(`${this.basePath}/technician/${technicianId}`, JSON.stringify(technicianPutDto), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }


  updateReservation(reservationId: number, updateReservationDto: UpdateReservationDto){
    return this.http.put(`${this.basePath}/reservations/${reservationId}`, JSON.stringify(updateReservationDto), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }


}
