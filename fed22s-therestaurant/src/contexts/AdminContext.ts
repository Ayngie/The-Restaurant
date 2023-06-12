import { createContext } from "react";
import { IBooking } from "../models/IBooking";

export const AdminContext = createContext<IBooking[]>([]);
