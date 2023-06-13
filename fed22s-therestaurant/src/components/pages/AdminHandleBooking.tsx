import { useParams } from "react-router";
import { AdminContext } from "../../contexts/AdminContext";
import { useContext, useEffect, useState } from "react";
import { IBooking } from "../../models/IBooking";
import { ShowSingleBooking } from "../admin/ShowSingleBooking";
import { ColumnWrapper } from "../styled/Wrappers";
import { getBookingsByDate } from "../../services/bookingService";
import { ActionType } from "../../reducers/AdminReducer";
import { AdminDispatchContext } from "../../contexts/AdminDispatchContext";

export const AdminHandleBooking = () => {
  const { id } = useParams();
  const bookings = useContext(AdminContext);
  const [booking, setBooking] = useState<IBooking>();
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [bookingIsDeleted, setBookingIsDeleted] = useState(false);

  //dispatch för mockdata:
  const dispatch = useContext(AdminDispatchContext);

  //mockdata
  useEffect(() => {
    if (bookings.length > 1) {
      return;
    } else {
      const getBookingsForDate = async (date: string) => {
        const bookingsFromAPI = await getBookingsByDate(date);
        const bookings = JSON.stringify(bookingsFromAPI);
        dispatch({ type: ActionType.GETBOOKINGSBYDATE, payload: bookings });
      };
      getBookingsForDate("2023-06-20");
    }
    //slut på mockdata

    if (booking) return;

    const findBooking = bookings.find((booking) => booking._id === id);
    if (findBooking) {
      setBooking(findBooking);
    }
    console.log(findBooking);
  }, [booking, id]);

  return (
    <>
      <ColumnWrapper>
        {!bookingIsDeleted && (
          <ShowSingleBooking
            singleBooking={booking}
            showUpdateForm={setShowUpdateForm}
            bookingDeleted={setBookingIsDeleted}></ShowSingleBooking>
        )}
        {/* <p>{booking?.date}</p>
        <p>hej</p> */}
        {bookingIsDeleted && <h3>Bokningen är raderad</h3>}
      </ColumnWrapper>
    </>
  );
};
