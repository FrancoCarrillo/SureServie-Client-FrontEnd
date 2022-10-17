import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceService } from 'src/app/service/services/service.service';

@Component({
  selector: 'app-technician-info',
  templateUrl: './technician-info.component.html',
  styleUrls: ['./technician-info.component.css']
})
export class TechnicianInfoComponent implements OnInit {
  show=true
  client: object = new Object()

  form :FormGroup= this.builder.group({
    date: ['', [Validators.required]],
    description: ['', {validators: [Validators.maxLength(1000)], updateOn: 'change'}],
  });

  constructor(private serviceService: ServiceService, public builder: FormBuilder, private _snackBar: MatSnackBar) { }

  get description(){ return this.form.controls['description'];}

  ngOnInit(): void {
    this.getUser()
  }

  getCurrentTechnician(){
    let currentTechnician= localStorage.getItem('Technician')
    if(currentTechnician){
      let technician = (JSON.parse(currentTechnician));
      return technician;
    }else return null
  }

  getCurrentUserId(){
    let currentUser= localStorage.getItem('id')
    if(currentUser){
      let userId = (JSON.parse(currentUser));
      return userId;
    }else return null
  }

  getUser(){
    this.serviceService.getCurrentUser(this.getCurrentUserId()).subscribe( (response: any) => {
      this.client=response
      console.log(this.client)
    })
  }

  openSnackBar(){
    this._snackBar.open("Reservación hecha correctamente", "Cerrar");
  }

  postReservation(){
    const serviceRequest={
      detail: this.form.value.description,
      total_price: 0,
      reservation_price: 0,
      confirmation: 0,
    }
    const reservation={
      date_of: this.form.value.date
    }
    this.serviceService.postServiceRequest(this.getCurrentUserId(),this.getCurrentTechnician().id,serviceRequest).subscribe( (response: any) => {
      console.log(response)
      this.serviceService.postReservation(response.id,reservation).subscribe( (result: any) => {
        console.log(result)
      })
    })
    this.openSnackBar()
  }
}
