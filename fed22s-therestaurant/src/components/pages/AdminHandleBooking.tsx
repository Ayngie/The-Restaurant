import { useParams } from "react-router";
import { AdminContext } from "../../contexts/AdminContext";
import { useContext, useEffect, useState } from "react";
import { IBooking } from "../../models/IBooking";
import { ShowSingleBooking } from "../admin/ShowSingleBooking";
import { ColumnWrapper } from "../styled/Wrappers";
import { UpdateBooking } from "../showSingleBooking/UpdateBooking";

export const AdminHandleBooking = () => {
  const { id } = useParams();
  const bookings = useContext(AdminContext);
  const [booking, setBooking] = useState<IBooking>();
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [bookingIsDeleted, setBookingIsDeleted] = useState(false);

  //mockdata
  useEffect(() => {
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
            bookingDeleted={setBookingIsDeleted}
          ></ShowSingleBooking>
        )}
        {bookingIsDeleted && <h3>Bokningen är raderad</h3>}
        <UpdateBooking></UpdateBooking>
      </ColumnWrapper>
    </>
  );
};
