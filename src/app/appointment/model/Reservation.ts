import {ServiceRequest} from "../../reservation/model/ServiceRequest";

export interface Reservation {
  id: number;
  date_of: String;
  status: number;
  serviceRequest: ServiceRequest
}
