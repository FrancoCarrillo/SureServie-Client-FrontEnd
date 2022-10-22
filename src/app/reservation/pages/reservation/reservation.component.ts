import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {ReservationService} from "../../services/reservation.service";
import {Reservation} from "../../model/ReservationDto";
import {ReservationInfoComponent} from "../../../dialog/reservation-info/reservation-info.component";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  selected = new FormControl(14)
  clientId: number = 0;
  reservations: Array<Reservation> = [];
  reservationReq: object = {};

  reservationForm :FormGroup= this.builder.group({
    speciality: this.selected,
  });

  constructor(private reservationService: ReservationService, public builder: FormBuilder, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.clientId = +localStorage.getItem("id")!
    this.getTechniciansByClientId(this.clientId);
  }

  getTechniciansByClientId(clientId: number){
    this.reservationService.getByClientId(clientId).subscribe( (response: any) => {
      this.reservations = response;
      console.log(this.reservations)
    })
  }

  openDialog(id: number){
    this.reservationService.getReservationById(id).subscribe((response: any) => {
      this.reservationReq = response;
      console.log(this.reservationReq)
      localStorage.setItem('Reservation', JSON.stringify(this.reservationReq));
      const dialogRef = this.dialog.open(ReservationInfoComponent);
      dialogRef.afterClosed().subscribe();
    })
  }

}
