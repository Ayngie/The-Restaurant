import { useEffect, useReducer } from "react";
import { AdminContext } from "../../contexts/AdminContext";
import { AdminDispatchContext } from "../../contexts/AdminDispatchContext";
import { AdminReducer } from "../../reducers/AdminReducer";

import { Outlet } from "react-router";

export const Admin = () => {
  const [bookings, dispatch] = useReducer(AdminReducer, []);

  useEffect(() => {
    // Hämta alla bokningar här.
  }, []);
  return (
    <>
      <AdminContext.Provider value={bookings}>
        <AdminDispatchContext.Provider value={dispatch}>
          <Outlet></Outlet>
        </AdminDispatchContext.Provider>
      </AdminContext.Provider>
    </>
  );
};
