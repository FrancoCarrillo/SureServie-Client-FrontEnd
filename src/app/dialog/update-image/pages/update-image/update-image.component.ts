import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-image',
  templateUrl: './update-image.component.html',
  styleUrls: ['./update-image.component.css']
})
export class UpdateImageComponent implements OnInit {

  showConfirmationDialog = false
  showChangeDialog = true

  update_image = new FormGroup({
    image: new FormControl('', Validators.required)
  })

  constructor() { }


  ngOnInit(): void {
  }

  get image() {
    return this.update_image.get("image");
  }

  updateImage(): void{
    alert("Se va a actualizar perrooo");
  }

  changeVisibility(show: String){

    if(show == "Change-Image"){
      this.showConfirmationDialog = false
      this.showChangeDialog = true
    }
    if(show == "Confirmation-Dialog"){

      if(this.update_image.status == "VALID"){

        this.showConfirmationDialog = true
        this.showChangeDialog = false

      } else {
        alert("Missing Information")
      }
    }

  }

}
