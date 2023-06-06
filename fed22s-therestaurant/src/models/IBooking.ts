import { IGuest, defaultGuest } from "./IGuest";

export interface IBooking {
  _id?: string;
  numberOfGuests: number;
  date: string;
  time: string;
  guest: IGuest;
}

export const defaultBooking: IBooking = {
  numberOfGuests: 0,
  date: "",
  time: "",
  guest: defaultGuest,
};
