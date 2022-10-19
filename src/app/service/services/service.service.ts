import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

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

  getAllTechnician(){
    return this.http.get(`${this.basePath}/technician`)
      .pipe(
        catchError(this.handleError)
      )
  }

  getAllServices(disponibility: number, district: string, specialityId: number){
    return this.http.get(`${this.basePath}/technician/disponibility/${disponibility}/district/${district}/speciality/${specialityId}`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  getTechnicianById(id: number){
    return this.http.get(`${this.basePath}/technician/${id}`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  getCurrentUser(id: number){
    return this.http.get(`${this.basePath}/clients/${id}`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  postServiceRequest(clientId:any,technianId:any,item: object):Observable<object> {
    return this.http.post(`${this.basePath}/services/${clientId}/${technianId}`,item,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  postReservation(serviceRequestId:any,item: object):Observable<object> {
    return this.http.post(`${this.basePath}/reservations/${serviceRequestId}`,item,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
}
