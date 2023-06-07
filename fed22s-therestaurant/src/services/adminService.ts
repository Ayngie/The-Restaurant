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

export const getBookingById = async (id: string): Promise<IBooking> => {
  return await get<IBooking>(`/${id}`);
};
