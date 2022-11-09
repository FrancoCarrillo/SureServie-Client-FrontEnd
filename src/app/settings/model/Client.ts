export class Client{
  username: String;
  email: String;
  name: String;
  last_name: String;
  telephone_number: String;
  dni: String;
  amount_reservation: Number;
  image_url: String;
  image_Id: String;

  constructor(username: String, name: String ,last_name: String, telephone_number: String, dni: String, email: String, amount_reservation: number, image_url: String, image_Id: String) {
    this.username = username;
    this.name = name;
    this.last_name = last_name;
    this.telephone_number = telephone_number;
    this.dni = dni;
    this.email = email;
    this.amount_reservation = amount_reservation;
    this.image_Id = image_Id;
    this.image_url = image_url;
  }

}
