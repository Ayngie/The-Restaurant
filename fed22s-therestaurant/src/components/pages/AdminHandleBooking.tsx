import { useParams } from "react-router";
import { AdminContext } from "../../contexts/AdminContext";
import { useContext, useEffect, useState } from "react";
import { IBooking } from "../../models/IBooking";
import { ShowSingleBooking } from "../admin/ShowSingleBooking";

export const AdminHandleBooking = () => {
  const { id } = useParams();
  const bookings = useContext(AdminContext);
  const [booking, setBooking] = useState<IBooking>();

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
      <ShowSingleBooking></ShowSingleBooking>
      <p>{booking?.date}</p>
      <p>hej</p>
    </>
  );
};
