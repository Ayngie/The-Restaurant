import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { ColumnWrapper, RowWrapper } from ".././styled/Wrappers";
import { NormalButton, WarningButton } from ".././styled/StyledButtons";
import { createBooking } from "../../services/bookingService";
import { IBooking, defaultBooking } from "../../models/IBooking";
import { IGuest } from "../../models/IGuest";

interface ICompleteBookingProps {
  sendBooking(guest: IGuest): void;
}

type FormValues = {
  name: string;
  email: string;
  phoneNumber: string;
};

export const CompleteBooking = ({ sendBooking }: ICompleteBookingProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Data", data);
    const guest: IGuest = {
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber,
    };
    sendBooking(guest);
    reset();
  };

  const handleCancel = () => {
    console.log("Avbryt");
  };

  return (
    <>
      <h3>Vänligen fyll i dina kontaktuppgifter:</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ColumnWrapper>
          <input
            type="text"
            placeholder="Namn (för- och efternamn):"
            id="name"
            {...register("name", {
              required: true,
              maxLength: 150,
              pattern: /^[A-Ö][a-ö]+\s[A-Ö][a-ö]+$/,
            })}
          />
          <input
            type="email"
            placeholder="E-post:"
            id="email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <input
            type="tel"
            placeholder="Telefonnummer:"
            id="phoneNumber"
            {...register("phoneNumber", {
              required: true,
              pattern: /^(([+]46)\s*(7)|07)[02369]\s*(\d{4})\s*(\d{3})$/,
            })}
          />
          <RowWrapper>
            <NormalButton type="submit">Boka</NormalButton>
            <WarningButton type="button" onClick={handleCancel}>
              Avbryt
            </WarningButton>
          </RowWrapper>
        </ColumnWrapper>
      </form>
    </>
  );
};
