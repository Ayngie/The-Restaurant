import { useParams } from "react-router";
import { AdminContext } from "../../contexts/AdminContext";
import { Fragment, useContext, useEffect, useState } from "react";
import { IBooking, defaultBooking } from "../../models/IBooking";
import { ShowSingleBooking } from "../admin/ShowSingleBooking";
import { ColumnWrapper } from "../styled/Wrappers";
import { UpdateBooking } from "../admin/UpdateBooking";
import { checkBookedTables } from "../../helpers/checkBookedTables";

export const AdminHandleBooking = () => {
  const { id } = useParams();
  const bookings = useContext(AdminContext);
  const [booking, setBooking] = useState<IBooking>(defaultBooking);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [bookingIsDeleted, setBookingIsDeleted] = useState(false);
  const [freeTables, setFreeTables] = useState<IBookedTables>({
    tablesAtSix: 0,
    tablesAtNine: 0,
  });

  useEffect(() => {
    if (booking.numberOfGuests > 0) {
      const tables = checkBookedTables(bookings);
      setFreeTables({
        tablesAtSix: 15 - tables.tablesAtSix,
        tablesAtNine: 15 - tables.tablesAtNine,
      });
    }
    if (booking.numberOfGuests > 0) return;

    const findBooking = bookings.filter((booking) => booking._id === id);
    if (findBooking.length === 1) {
      setBooking(findBooking[0]);
    }
  }, [bookings, booking, id]);

  const updatingBooking = (bookingToShow: IBooking) => {
    setBooking(bookingToShow);
  };

  return (
    <>
      <ColumnWrapper>
        {!bookingIsDeleted && !showUpdateForm && (
          <ShowSingleBooking
            singleBooking={booking}
            showUpdateForm={setShowUpdateForm}
            bookingDeleted={setBookingIsDeleted}
          ></ShowSingleBooking>
        )}
        {bookingIsDeleted && <h3>Bokningen är raderad</h3>}
        {showUpdateForm && (
          <>
            <h3>Lediga bord vid sex: {freeTables.tablesAtSix}</h3>
            <h3>Lediga bord vid Nio: {freeTables.tablesAtNine}</h3>
            <UpdateBooking
              updatingBooking={updatingBooking}
              updatedComplete={setShowUpdateForm}
              guestAbleToBook={freeTables}
              booking={booking}
            ></UpdateBooking>
          </>
        )}
      </ColumnWrapper>
    </>
  );
};
