import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { TechnicianInfoComponent } from 'src/app/dialog/technician-info/technician-info.component';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  selected = new FormControl()
  selected2 = new FormControl()
  selected3 = new FormControl()
  technicians:Array<any> = [];
  technician: object = new Object();

  serviceForm :FormGroup= this.builder.group({
    speciality: this.selected,
    place: this.selected2,
    disponibility: this.selected3,
  });

  constructor(private serviceService: ServiceService, public builder: FormBuilder, public dialog: MatDialog) { }

  get date() { return this.serviceForm.controls['date'];}

  ngOnInit(): void {
    this.getAllTechnicians()
    this.serviceForm.value.speciality = ""
    this.serviceForm.value.place = ""
    this.serviceForm.value.disponibility = ""
  }

  getAllTechnicians(){
    this.serviceService.getAllTechnician().subscribe((response: any)=>{
      this.technicians=response
    })
  }

  getTechnicians(){
    this.serviceService.getAllServices(this.serviceForm.value.disponibility,this.serviceForm.value.place,this.serviceForm.value.speciality).subscribe( (response: any) => {
      this.technicians=response
      console.log(this.serviceForm.value.place,this.serviceForm.value.speciality)
    })
  }

  openDialog(id:number) {
    this.serviceService.getTechnicianById(id).subscribe( (response: any) => {
      this.technician=response
      console.log(this.technician)
      localStorage.setItem('Technician', JSON.stringify(this.technician));
      const dialogRef = this.dialog.open(TechnicianInfoComponent);
      dialogRef.afterClosed().subscribe(result => {
      });
    })
  }

}
