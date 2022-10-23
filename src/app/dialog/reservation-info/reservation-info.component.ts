import { Component, OnInit } from '@angular/core';
import {ReservationService} from "../../reservation/services/reservation.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-reservation-info',
  templateUrl: './reservation-info.component.html',
  styleUrls: ['./reservation-info.component.css']
})
export class ReservationInfoComponent implements OnInit {
  show = true;
  reservation: object = new Object();

  paymentForm :FormGroup= this.builder.group({
    cardNumber: ['',{validators:[Validators.required, Validators.maxLength(19)]}],
    expirationMonth: ['',{validators:[Validators.required]}],
    expirationDay: ['',{validators:[Validators.required]}],
    cardSecurityCode: ['',{validators:[Validators.required, Validators.maxLength(3)]}],
    firstName: ['', {validators: [Validators.required, Validators.maxLength(35)], updateOn: 'change'}],
    lastName: ['', {validators: [Validators.required, Validators.maxLength(45)], updateOn: 'change'}]
  });

  constructor(private reservationService: ReservationService, public builder: FormBuilder, private _snackBar: MatSnackBar) { }

  get firstNameVal(){ return this.paymentForm.controls['firstName'];}
  get lastNameVal(){ return this.paymentForm.controls['LastName'];}

  ngOnInit(): void {
  }

  getCurrentReservation(){
    let currentReservation = localStorage.getItem('Reservation')
    if (currentReservation){
      let reservation = (JSON.parse(currentReservation));
      return reservation;
    }else return null

  }

  postPayment(){
    this.openSnackBar()
  }

  openSnackBar() {
    this._snackBar.open("Payment Successful", '', {
      duration: 2000,
      horizontalPosition: "center",
      verticalPosition: "top",
    })
  }
}
