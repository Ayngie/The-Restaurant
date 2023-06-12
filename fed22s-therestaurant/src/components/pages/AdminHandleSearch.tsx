import { useEffect, useReducer } from "react";
import { AdminContext } from "../../contexts/AdminContext";
import { AdminDispatchContext } from "../../contexts/AdminDispatchContext";
import { AdminReducer } from "../../reducers/AdminReducer";
import { SearchBooking } from "../admin/SearchBooking";
import { ColumnWrapper } from "../styled/Wrappers";
import { ShowCalendar } from "../createNewBooking/ShowCalendar";

export const AdminHandleSearch = () => {
  const [bookings, dispatch] = useReducer(AdminReducer, []);

  useEffect(() => {
    // Hämta alla bokningar här.
  }, []);
  return (
    <>
      <AdminContext.Provider value={bookings}>
        <AdminDispatchContext.Provider value={dispatch}>
          <ColumnWrapper>
            <SearchBooking></SearchBooking>
          </ColumnWrapper>
        </AdminDispatchContext.Provider>
      </AdminContext.Provider>
    </>
  );
};
