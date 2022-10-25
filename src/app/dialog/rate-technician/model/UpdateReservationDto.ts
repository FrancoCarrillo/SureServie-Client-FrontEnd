export class UpdateReservationDto{
  date_of: String;
  status: number;

  constructor(date_of: String, status: number) {
    this.date_of = date_of;
    this.status = status;
  }

}
