import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { ColumnWrapper, RowWrapper } from ".././styled/Wrappers";
import { NormalButton, WarningButton } from ".././styled/StyledButtons";
import { createBooking } from "../../services/bookingService";
import { IBooking, defaultBooking } from "../../models/IBooking";
import { StyledInput } from "../styled/input/StyledInput";

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
  const [booking, setBooking] = useState<IBooking>(defaultBooking);

  const {
    register,
    handleSubmit,
    reset,
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

    reset();
  };
  console.log("Booking:", booking);
  console.log(errors);

  const handleCancel = () => {
    reset();
    console.log("Avbryt");
  };

  const postData = async () => {
    await createBooking(booking);
    console.log("postData");
  };

  // useEffect(() => {
  //   console.log("useEffect");
  // }, []);

  return (
    <>
      <h3>Vänligen fyll i dina kontaktuppgifter:</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ColumnWrapper>
          <StyledInput
            type="text"
            placeholder="Namn (för- och efternamn):"
            id="name"
            {...register("name", {
              required: true,
              maxLength: 150,
              pattern: /^[A-Ö][a-ö]+\s[A-Ö][a-ö]+$/,
            })}
          />
          <StyledInput
            type="email"
            placeholder="E-post:"
            id="email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <StyledInput
            type="tel"
            placeholder="Telefonnummer:"
            id="phoneNumber"
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
