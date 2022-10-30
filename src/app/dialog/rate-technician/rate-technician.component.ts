import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {RateTechnicianService} from "./service/rate-technician.service";
import {Reservation} from "../../appointment/model/Reservation";
import {ReservationDto} from "../reservation-info/model/ReservationDto";
import {UpdateTechnicianDto} from "./model/updateTechnicianDto";
import {UpdateReservationDto} from "./model/UpdateReservationDto";

@Component({
  selector: 'app-rate-technician',
  templateUrl: './rate-technician.component.html',
  styleUrls: ['./rate-technician.component.css']
})
export class RateTechnicianComponent implements OnInit {

  constructor(private router: Router, private _snackBar: MatSnackBar, private  rateTechnicianService: RateTechnicianService ) { }

  rate_value: number = 1;
  reservation: any;
  ngOnInit(): void {
    let currentReservation = localStorage.getItem('Reservation')
    if (currentReservation){
      this.reservation = (JSON.parse(currentReservation));
    }else this.reservation = null
  }

  send_qualification(){
    let updateTechnicianDto = new UpdateTechnicianDto(
      this.reservation.serviceRequest.technician.username,
      this.reservation.serviceRequest.technician.name,
      this.reservation.serviceRequest.technician.last_name,
      this.reservation.serviceRequest.technician.telephone_number,
      this.reservation.serviceRequest.technician.dni,
      this.reservation.serviceRequest.technician.email,
      this.reservation.serviceRequest.technician.professional_profile,
      this.reservation.serviceRequest.technician.district,
      this.reservation.serviceRequest.technician.speciality.id,
      this.rate_value,
      this.reservation.serviceRequest.technician.disponibility
    )

    let updateReservationDto = new UpdateReservationDto(this.reservation.date_of, 2)

    console.log(this.reservation.date_of)
    this.rateTechnicianService.updateTechnician(this.reservation.serviceRequest.technician.id,updateTechnicianDto).subscribe((e)=>{
      this.rateTechnicianService.updateReservation(this.reservation.id, updateReservationDto).subscribe((response: any)=>{
        this.openSnackBar()
        this.router.navigate(["/service"]).then();
      })
    })

  }

  openSnackBar(){
    this._snackBar.open("Qualification successful!", "Close", {
      duration: 5000,
      panelClass: ['snackbar-service']
    });
  }
}
