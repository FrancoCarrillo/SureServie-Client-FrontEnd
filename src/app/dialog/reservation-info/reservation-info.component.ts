import { Component, OnInit } from '@angular/core';
import {ReservationService} from "../../reservation/services/reservation.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ServiceRequestPutDto} from "./model/ServiceRequestPutDto";

import {Router} from "@angular/router";
import {ReservationDto} from "./model/ReservationDto";

@Component({
  selector: 'app-reservation-info',
  templateUrl: './reservation-info.component.html',
  styleUrls: ['./reservation-info.component.css']
})
export class ReservationInfoComponent implements OnInit {
  showReservationInfo = true;
  showPayment = false;
  showConfirmationDialog = false;
  reservation: object = {};
  minDate: Date = new Date(Date.now());
  selectDate: Date = new Date()

  paymentForm :FormGroup= this.builder.group({
    cardNumber: ['',{validators:[Validators.required, Validators.maxLength(19)]}],
    expirationMonth: ['',{validators:[Validators.required]}],
    expirationDay: ['',{validators:[Validators.required]}],
    cardSecurityCode: ['',{validators:[Validators.required, Validators.maxLength(3)]}],
    firstName: ['', {validators: [Validators.required, Validators.maxLength(35)], updateOn: 'change'}],
    lastName: ['', {validators: [Validators.required, Validators.maxLength(45)], updateOn: 'change'}]
  });

  constructor(private reservationService: ReservationService, public builder: FormBuilder, private _snackBar: MatSnackBar,  private route: Router) { }

  get firstNameVal(){ return this.paymentForm.controls['firstName'];}
  get lastNameVal(){ return this.paymentForm.controls['LastName'];}

  ngOnInit(): void {
    this.minDate = new Date(Date.now());
  }

  getCurrentReservation(){
    let currentReservation = localStorage.getItem('Reservation')
    if (currentReservation){
      let reservation = (JSON.parse(currentReservation));
      return reservation;
    }else return null

  }

  postPayment(){

    let currentServiceRequest = this.getCurrentReservation()
    let serviceRequestDto = new ServiceRequestPutDto(currentServiceRequest.total_price, currentServiceRequest.reservation_price, 3)
    let reservationDto = new ReservationDto(this.selectDate.toISOString())

    console.log(reservationDto)

    this.reservationService.postReservation(reservationDto, currentServiceRequest.id).subscribe((response: any) => {
      this.reservationService.updateServiceRequest(this.getCurrentReservation().id, serviceRequestDto).subscribe((response:any)=> {
        this.openSnackBar()
        this.route.navigate(['/service']).then()
      })
    })
  }

  openSnackBar(){
    this._snackBar.open("Reservation successful!", "Close", {
      duration: 5000,
      panelClass: ['snackbar-service']
    });
  }

  showDialog(show: String){

    if(show == "Payment"){
      this.showReservationInfo = false
      this.showConfirmationDialog = false
      this.showPayment = true
    }
    if(show == "ReservationInfo"){
      this.showReservationInfo = true
      this.showConfirmationDialog = false
      this.showPayment = false
    }
    if(show == "Confirmation"){
      this.showReservationInfo = false
      this.showConfirmationDialog = true
      this.showPayment = false
    }

  }

}
