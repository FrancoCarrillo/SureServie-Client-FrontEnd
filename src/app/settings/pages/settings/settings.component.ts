import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SettingsService} from "../../services/settings.service";
import {Client} from "../../model/Client";
import {MatDialog} from "@angular/material/dialog";
import {ChangePasswordComponent} from "../../../dialog/change-password/pages/change-password/change-password.component";


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit  {

  enable: boolean = false
  clientId: Number = 0;
  client: Client = new Client("","","","","","",0);

  settingsForm = new FormGroup({
    name: new FormControl(),
    lastname: new FormControl(),
    telephone_number: new FormControl(),
    id_number: new FormControl(),
    username: new FormControl(),
    email: new FormControl(),
  })

  constructor(private settingsService: SettingsService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.clientId = Number(localStorage?.getItem("id"))
    this.getClient()
    this.settingsForm.disable()
  }

  getClient(){
    this.settingsService.getClient(this.clientId).subscribe((response: any) => {
      this.client = response
    })
  }

  editForm(): void {
    this.settingsForm.enable()
    this.enable = true
  }

  cancelEditForm(): void {
    this.settingsForm.disable()
    this.enable = false
  }

  saveData(): void{
    this.settingsService.updateClient(this.clientId, this.client).subscribe((response:any) => {
      this.getClient()
      this.settingsForm.disable()
      this.enable = false
    }, (e)=>{
      console.log(e)
    })
  }

  changePassword(): void {
    const dialogRef = this.dialog.open(ChangePasswordComponent)
    dialogRef.afterClosed().subscribe();
  }

}
