import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { ColumnWrapper, RowWrapper } from ".././styled/Wrappers";
import { NormalButton, WarningButton } from ".././styled/StyledButtons";
import { createBooking } from "../../services/bookingService";
import { IBooking, defaultBooking } from "../../models/IBooking";
import { IGuest } from "../../models/IGuest";
import { StyledInput } from "../styled/input/StyledInput";

interface ICompleteBookingProps {
  sendBooking(guest: IGuest): void;
  postBooking(): Promise<void>;
}

type FormValues = {
  name: string;
  email: string;
  phoneNumber: string;
};

export const CompleteBooking = ({
  sendBooking,
  postBooking,
}: ICompleteBookingProps) => {
  const [isSubmit, setIsSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setIsSubmit(true);
    console.log("Data", data);
    const guest: IGuest = {
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber,
    };
    sendBooking(guest);

    // reset();
  };
  useEffect(() => {
    if (isSubmit) {
      const submit = async () => {
        try {
          await postBooking();
        } catch (error) {
          console.error(error);
        } finally {
          setIsSubmit(false);
        }
      };
      submit();
    }
  }, [isSubmit, postBooking]);

  const handleCancel = () => {
    reset();
    console.log("Avbryt");
  };

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
            <NormalButton type="submit" disabled={isSubmit}>
              Boka
            </NormalButton>
            <WarningButton type="button" onClick={handleCancel}>
              Avbryt
            </WarningButton>
          </RowWrapper>
        </ColumnWrapper>
      </form>
    </>
  );
};
