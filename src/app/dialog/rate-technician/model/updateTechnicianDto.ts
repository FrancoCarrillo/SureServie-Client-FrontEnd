export class UpdateTechnicianDto {
  username: String;
  email: String;
  password: String;
  name: String;
  last_name: String;
  telephone_number: String;
  dni: String;
  professional_profile: String;
  district: String;
  speciality: number;
  valoration: number;
  disponibility: number;

  constructor(username: String,
              name: String,
              last_name: String,
              telephone_number: String,
              dni: String,
              email: String,
              professional_profile: String,
              district: String,
              speciality: number,
              valoration: number,
              disponibility: number) {
  this.username = username;
  this.name = name;
  this.last_name = last_name;
  this.telephone_number = telephone_number;
  this.dni = dni;
  this.email = email;
  this.password = "String";
  this.professional_profile = professional_profile;
  this.district = district;
  this.speciality = speciality;
  this.valoration = valoration;
  this.disponibility = disponibility;
}
}
