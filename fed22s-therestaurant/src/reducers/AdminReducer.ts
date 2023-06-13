import { IBooking } from "../models/IBooking";
import { adminDeleteBooking, updateBooking } from "../services/adminService";

export interface IAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  GETBOOKINGSBYDATE,
  GETBOOKINGBYIDWITHAPI,
  GETBOOKINGBYIDFROMCONTEXT,
  UPDATEBOOKING,
  REMOVEBOOKING,
}

export const AdminReducer = (bookings: IBooking[], action: IAction) => {
  switch (action.type) {
    case ActionType.GETBOOKINGSBYDATE: {
      return JSON.parse(action.payload);
    }
    case ActionType.GETBOOKINGBYIDFROMCONTEXT: {
      return bookings.map((booking) => {
        if (booking._id === action.payload) {
          return booking;
        } else {
          return;
        }
      });
    }
    case ActionType.GETBOOKINGBYIDWITHAPI: {
      return JSON.parse(action.payload);
    }
    case ActionType.UPDATEBOOKING: {
      const getBooking: IBooking = JSON.parse(action.payload);
      const bookingInfo: IBooking = {
        numberOfGuests: getBooking.numberOfGuests,
        date: getBooking.date,
        time: getBooking.time,
        guest: {
          name: getBooking.guest.name,
          email: getBooking.guest.email,
          phoneNumber: getBooking.guest.phoneNumber,
        },
      };
      console.log(bookingInfo);
      updateBooking(bookingInfo, getBooking?._id);
      return bookings;
    }
    case ActionType.REMOVEBOOKING: {
      adminDeleteBooking(action.payload);
      return bookings.filter((booking) => booking._id !== action.payload);
    }
    default:
      break;
  }
  return bookings;
};
