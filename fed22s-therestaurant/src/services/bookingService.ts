import axios from "axios";
import { IBooking } from "../models/IBooking";

const BASE_URL = "http://localhost:5000/api/v1/bookings";

const get = async <T>(endpoint: string) => {
  const response = await axios.get<T>(`${BASE_URL}${endpoint}`);
  return response.data;
};

export const getBookingsByDate = async (date: string): Promise<IBooking[]> => {
  return await get<IBooking[]>(`/?s=${date}`);
};

export const getBookingById = async (id: number): Promise<IBooking> => {
  return await get<IBooking>(`/${id}`);
};

export const createBooking = async (newGuest: IBooking) => {
  const response = await axios.post(`${BASE_URL}`, {
    numberOfGuests: newGuest.numberOfGuests,
    date: newGuest.date,
    time: newGuest.time,
    guest: {
      name: newGuest.guest.name,
      email: newGuest.guest.email,
      phoneNumber: newGuest.guest.phoneNumber,
    },
  });
  return response.data;
};
/*
{
  ...booking,
  guest: {
    ...booking.guest,
    [value]: e.target.value,
  }
}
*/

export const deleteBooking = async (id: string) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  console.log(response.status);
  return response.status;
};
