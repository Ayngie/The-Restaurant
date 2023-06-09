import { useReducer } from "react";
import { AdminContext } from "../../contexts/AdminContext";
import { AdminDispatchContext } from "../../contexts/AdminDispatchContext";
import { AdminReducer } from "../../reducers/AdminReducer";
import { AdminSearchBooking } from "../admin/AdminSearchBooking";

export const Admin = () => {
  const [bookings, dispatch] = useReducer(AdminReducer, []);
  return (
    <>
      <AdminContext.Provider value={bookings}>
        <AdminDispatchContext.Provider value={dispatch}>
          <AdminSearchBooking></AdminSearchBooking>
        </AdminDispatchContext.Provider>
      </AdminContext.Provider>
    </>
  );
};
