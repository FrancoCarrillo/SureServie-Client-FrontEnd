export interface Reservation {
  id: number;
  date: Date;

  serviceRequest: ServiceRequest;
}

export interface ServiceRequest {
  serviceRId: number;
  detail: String;
  totalPrice: number;
  reservationPrice: number;
  confirmation: number;

  technician: Technician;
}

export interface Technician {
  technicianId: number;
  username: String;
  email: String;
  role: String;
  professionalProfile: String;
  valoration: number;
  district: String;
  disponibility: number;
  speciality: Speciality;
}

export interface Speciality {
  specialityId: number;
  name: String;
}
