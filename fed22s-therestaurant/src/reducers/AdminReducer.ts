import { IBooking } from "../models/IBooking";

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
      const bookingToSort: IBooking[] = JSON.parse(action.payload);

      return [...bookingToSort].sort((a, b) => {
        return a.time > b.time ? 1 : -1;
      });
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
      return bookings.map((booking) => {
        if (booking._id === getBooking._id) {
          return {
            ...booking,
            numberOfGuests: getBooking.numberOfGuests,
            date: getBooking.date,
            time: getBooking.time,
            guest: {
              ...booking.guest,
              name: getBooking.guest.name,
              email: getBooking.guest.email,
              phoneNumber: getBooking.guest.phoneNumber,
            },
          };
        } else {
          return booking;
        }
      });
    }
    case ActionType.REMOVEBOOKING: {
      return bookings.filter((booking) => booking._id !== action.payload);
    }
    default:
      break;
  }
  return bookings;
};
