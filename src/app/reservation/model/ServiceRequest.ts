import {Client} from "../../settings/model/Client";

export interface ServiceRequest {
  id: number;
  detail: String;
  reservation_price: number;
  confirmation: number;
  total_price: number;
  technician: Technician;
}

export interface Technician {
  technicianId: number;
  disponibility: number;
  district: String;
  email: String;
  professionalProfile: String;
  username: String;
  valoration: number;

  name: String;
  last_name: String;

  speciality: Speciality;
}

export interface Speciality {
  specialityId: number;
  name: String;
}
