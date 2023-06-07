import { useForm, SubmitHandler } from "react-hook-form";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { IGuest, defaultGuest } from "../models/IGuest";
import { ColumnWrapper, RowWrapper } from "./styled/Wrappers";
import { NormalButton, WarningButton } from "./styled/StyledButtons";
import { createBooking } from "../services/bookingService";
import { IBooking, defaultBooking } from "../models/IBooking";

interface ICompleteBookingProps {
  numberOfGuests?: number;
  date?: string;
  time?: string;
}

type FormValues = {
  name: string;
  email: string;
  phoneNumber: string;
};

export const CompleteBooking = ({}: ICompleteBookingProps) => {
  // const [guest, setGuest] = useState<IGuest>(defaultGuest);
  const [booking, setBooking] = useState<IBooking>(defaultBooking);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Data", data);

    setBooking({
      ...booking,
      numberOfGuests: 6,
      date: "2023-06-24",
      time: "18:00",
      guest: {
        ...booking.guest,
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber,
      },
    });
    // createBooking(booking);

    // setGuest(defaultGuest);
  };
  console.log("Booking:", booking);
  console.log(errors);

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();

  //   console.log("Booking:", booking);

  //   setGuest(defaultGuest);
  // };

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const name = e.target.name;

  //   if (e.target.type === "text") {
  //     setGuest({ ...guest, [name]: e.target.value });
  //     setBooking({
  //       ...booking,
  //       guest: { ...booking.guest, [name]: e.target.value },
  //     });
  //   }
  //   if (e.target.type === "email") {
  //     setGuest({ ...guest, [name]: e.target.value });
  //     setBooking({
  //       ...booking,
  //       guest: { ...booking.guest, [name]: e.target.value },
  //     });
  //   }
  //   if (e.target.type === "tel") {
  //     setGuest({ ...guest, [name]: e.target.value });
  //     setBooking({
  //       ...booking,
  //       guest: { ...booking.guest, [name]: e.target.value },
  //     });
  //   }
  // };

  const handleCancel = () => {
    console.log("Avbryt");
  };

  const postData = async () => {
    await createBooking(booking);
    console.log("postData");
  };

  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <>
      <h3>Vänligen fyll i dina kontaktuppgifter:</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <form onSubmit={handleSubmit}> */}
        <ColumnWrapper>
          <input
            type="text"
            // value={guest.name}
            // onChange={handleChange}
            // name="name"
            placeholder="Namn (för- och efternamn):"
            {...register("name", {
              required: true,
              maxLength: 150,
              pattern: /^[A-Ö][a-ö]+\s[A-Ö][a-ö]+$/,
            })}
          />
          <input
            type="email"
            // value={guest.email}
            // onChange={handleChange}
            // name="email"
            placeholder="E-post:"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <input
            type="tel"
            // value={guest.phoneNumber}
            // onChange={handleChange}
            // name="phoneNumber"
            placeholder="Telefonnummer:"
            {...register("phoneNumber", {
              required: true,
              pattern: /^(([+]46)\s*(7)|07)[02369]\s*(\d{4})\s*(\d{3})$/,
            })}
          />
          <RowWrapper>
            <NormalButton type="submit">Spara</NormalButton>
            <WarningButton type="button" onClick={handleCancel}>
              Avbryt
            </WarningButton>
          </RowWrapper>
        </ColumnWrapper>

        <p>{JSON.stringify(booking)}</p>
      </form>
      <NormalButton type="button" onClick={postData}>
        Spara bokning
      </NormalButton>
    </>
  );
};

// export default function App() {
//   return (
//     <form>
//       <input type="text" placeholder="Namn" />
//       <input type="email" placeholder="Epost" />
//       <input type="tel" placeholder="Telefonnummer" />

//       <input type="submit" />
//     </form>
//   );
// }
