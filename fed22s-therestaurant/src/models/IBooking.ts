import { IGuest } from "./IGuest";

export interface IBooking {
  _id?: string;
  numberOfGuests: number;
  date: string;
  time: string;
  guest: IGuest;
}
