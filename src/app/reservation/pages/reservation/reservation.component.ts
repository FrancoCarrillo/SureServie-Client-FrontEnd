import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {ReservationService} from "../../services/reservation.service";
import {ReservationInfoComponent} from "../../../dialog/reservation-info/reservation-info.component";
import {ServiceRequest} from "../../model/ServiceRequest";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  selected = new FormControl()
  clientId: number = +localStorage.getItem("id")!;
  serviceRequest: Array<ServiceRequest> = [];
  reservationReq: object = {};

  reservationForm :FormGroup= this.builder.group({
    speciality: this.selected,
  });

  constructor(private reservationService: ReservationService, public builder: FormBuilder, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getServiceRequestByClientId();
  }

  getServiceRequestByClientId(){
    this.reservationService.getServiceRequestByClientId(this.clientId).subscribe( (response: any) => {
      this.serviceRequest = response;
    })
  }

  openDialog(id: number){
    this.reservationService.getServiceRequestById(id).subscribe((response: any) => {
      localStorage.setItem('Reservation', JSON.stringify(response));
      const dialogRef = this.dialog.open(ReservationInfoComponent);
      dialogRef.afterClosed().subscribe();
    })
  }

}
