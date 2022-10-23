import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, retry, throwError} from "rxjs";
import {ServiceRequestPutDto} from "../../dialog/reservation-info/model/ServiceRequestPutDto";
import {ReservationDto} from "../../dialog/reservation-info/model/ReservationDto";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  basePath='https://sure-service.herokuapp.com/api/v1'

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error occurred: ${error.error.message}`);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError(() => new Error('Something happened with request, please try again later'));
  }


  getServiceRequestById(id: number) {
    return this.http.get(`${this.basePath}/services/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getServiceRequestByClientId(clientId: number){
    return this.http.get(`${this.basePath}/services/client/${clientId}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  postReservation(reservationDto: ReservationDto, serviceRequestId: number){
    return this.http.post(`${this.basePath}/reservations/${serviceRequestId}`, JSON.stringify(reservationDto), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }

  updateServiceRequest(serviceRequestId: number, serviceRequestPutDto: ServiceRequestPutDto){
    return this.http.put(`${this.basePath}/services/${serviceRequestId}`, JSON.stringify(serviceRequestPutDto), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }

}
