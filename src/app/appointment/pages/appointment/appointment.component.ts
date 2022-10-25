import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AppointmentService} from "../../services/appointment.service";
import {Reservation} from "../../model/Reservation";
import {RateTechnicianComponent} from "../../../dialog/rate-technician/rate-technician.component";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {RateTechnicianService} from "../../../dialog/rate-technician/service/rate-technician.service";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  selected = new FormControl()
  clientId: number = +localStorage.getItem("id")!;
  reservations: Array<Reservation> = [];
  allReservation: Array<Reservation> = [];

  appointmentForm: FormGroup = this.builder.group({
    status: this.selected,
  });

  ngOnInit(): void {
    this.getReservationByClientId()
  }

  constructor(private appointmentService: AppointmentService, public builder: FormBuilder, public dialog: MatDialog) {
  }

  getReservationByClientId() {
    this.appointmentService.getReservationByClientId(this.clientId).subscribe((response: any) => {
      this.allReservation = response;

      this.allReservation.map((e) => {
        let dia = new Date(Date.parse(e.date_of.valueOf()))
        if(e.status !=1) e.date_of = dia.toLocaleDateString()

      })

      this.reservations = this.allReservation;
    })
  }


  filterByStatus() {
    if (this.appointmentForm.get("status")?.status == "VALID") {
      const status = this.appointmentForm.get("status")?.value
      this.reservations = this.allReservation.filter(e => e.status == status)
    } else {
      alert("Invalid Information")
    }
  }

  openDialog(item: any) {
    localStorage.setItem("Reservation", JSON.stringify(item))
    const dialogRef = this.dialog.open(RateTechnicianComponent)
    dialogRef.afterClosed().subscribe();
  }

}
