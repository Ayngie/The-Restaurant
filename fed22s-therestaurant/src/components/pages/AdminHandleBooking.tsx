import { useParams } from "react-router";
import { AdminContext } from "../../contexts/AdminContext";
import { useContext, useEffect, useState } from "react";
import { IBooking, defaultBooking } from "../../models/IBooking";
import { ShowSingleBooking } from "../admin/ShowSingleBooking";
import { ColumnWrapper } from "../styled/Wrappers";
import { UpdateBooking } from "../showSingleBooking/UpdateBooking";

export const AdminHandleBooking = () => {
  const { id } = useParams();
  const bookings = useContext(AdminContext);
  const [booking, setBooking] = useState<IBooking>(defaultBooking);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [bookingIsDeleted, setBookingIsDeleted] = useState(false);

  console.log("bookings: ", bookings);

  //mockdata
  useEffect(() => {
    if (booking.numberOfGuests > 0) return;

    const findBooking = bookings.filter((booking) => booking._id === id);
    if (findBooking.length === 1) {
      setBooking(findBooking[0]);
    }
  }, [bookings, booking, id]);

  return (
    <>
      <ColumnWrapper>
        {!bookingIsDeleted && (
          <ShowSingleBooking
            singleBooking={booking}
            showUpdateForm={setShowUpdateForm}
            bookingDeleted={setBookingIsDeleted}
          ></ShowSingleBooking>
        )}
        {bookingIsDeleted && <h3>Bokningen är raderad</h3>}
        {showUpdateForm && <UpdateBooking booking={booking}></UpdateBooking>}
      </ColumnWrapper>
    </>
  );
};
