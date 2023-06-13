import axios from "axios";
import { IBooking } from "../models/IBooking";

const BASE_URL = "http://localhost:5000/api/v1/adminroutes";

const get = async <T>(endpoint: string) => {
  const response = await axios.get<T>(`${BASE_URL}${endpoint}`);
  return response.data;
};

export const getBookingsByDate = async (date: string): Promise<IBooking[]> => {
  return await get<IBooking[]>(`/?s=${date}`);
};

export const adminGetBookingById = async (id: string): Promise<IBooking> => {
  return await get<IBooking>(`/${id}`);
};

export const updateBooking = async (updateBooking: IBooking, id: string) => {
  const response = await axios.put(`${BASE_URL}/${id}`, {
    numberOfGuests: updateBooking.numberOfGuests,
    date: updateBooking.date,
    time: updateBooking.time,
    guest: {
      name: updateBooking.guest.name,
      email: updateBooking.guest.email,
      phoneNumber: updateBooking.guest.phoneNumber,
    },
  });
  return response.data;
};
/*
Exempel på hur man kan uppdatera användare.
await updateBooking(updated, "6480daa0eb1a360858e6b2f9");
måste skicka in hela boknings samt id:et till bokning
*/
export const adminDeleteBooking = async (id: string) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  console.log(response.status);
  return response.status;
};
