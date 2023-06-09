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
      return;
    }
    case ActionType.GETBYID: {
      return;
    }
    case ActionType.UPDATE: {
      return;
    }
    case ActionType.REMOVE: {
      return;
    }
    default:
      break;
  }
  return bookings;
};
