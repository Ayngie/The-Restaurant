import { IBooking } from "../models/IBooking";

export interface IAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  GETBOOKINGS,
  GETBOOKINGBYID,
  UPDATEBOOKING,
  REMOVEBOOKING,
}

export const AdminReducer = (bookings: IBooking[], action: IAction) => {
  switch (action.type) {
    case ActionType.GETBOOKINGS: {
      return JSON.parse(action.payload);
    }
    case ActionType.GETBOOKINGBYID: {
      return bookings.map((booking) => {
        if (booking._id === action.payload) {
          return booking;
        } else {
          return;
        }
      });
    }
    case ActionType.UPDATEBOOKING: {
      return bookings;
    }
    case ActionType.REMOVEBOOKING: {
      return bookings;
    }
    default:
      break;
  }
  return bookings;
};
