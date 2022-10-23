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
  allServiceRequest: Array<ServiceRequest> = [];
  reservationForm :FormGroup= this.builder.group({
    status: this.selected,
  });

  constructor(private reservationService: ReservationService, public builder: FormBuilder, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getServiceRequestByClientId();
  }

  filterByStatus(){
    if(this.reservationForm.get("status")?.status == "VALID"){
      const status = this.reservationForm.get("status")?.value
      this.serviceRequest = this.allServiceRequest.filter(e=>e.confirmation == status)
    } else{
      alert("Invalid Information")
    }
  }

  getServiceRequestByClientId(){
    this.reservationService.getServiceRequestByClientId(this.clientId).subscribe( (response: any) => {
      this.allServiceRequest = response;
      this.serviceRequest = this.allServiceRequest;
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
