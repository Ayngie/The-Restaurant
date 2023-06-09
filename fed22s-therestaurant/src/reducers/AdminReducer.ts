import { IBooking } from "../models/IBooking";

export interface IAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  GET,
  GETBYID,
  UPDATE,
  REMOVE,
}

export const AdminReducer = (bookings: IBooking[], action: IAction) => {
  switch (action.type) {
    case ActionType.GET: {
      return bookings;
    }
    case ActionType.GETBYID: {
      return bookings;
    }
    case ActionType.UPDATE: {
      return bookings;
    }
    case ActionType.REMOVE: {
      return bookings;
    }
    default:
      break;
  }
  return bookings;
};
