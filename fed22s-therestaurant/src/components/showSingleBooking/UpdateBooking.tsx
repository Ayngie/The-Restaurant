import { useForm, SubmitHandler } from "react-hook-form";
import { NormalButton, WarningButton } from "../styled/StyledButtons";
import { StyledInput } from "../styled/StyledInput";
import { ColumnWrapper, RowWrapper } from "../styled/Wrappers";
import { StyledErrorParagraph } from "../styled/input/StyledErrorParagraph";
import { IBooking } from "../../models/IBooking";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AdminContext } from "../../contexts/AdminContext";
import { ActionType } from "../../reducers/AdminReducer";
import { AdminDispatchContext } from "../../contexts/AdminDispatchContext";

type FormValues = {
  numberOfGuests: number;
  date: string;
  time: string;
  guest: { name: string; email: string; phoneNumber: string };
};
export const UpdateBooking = () => {
  const { id } = useParams();
  const bookings = useContext(AdminContext);
  const dispatch = useContext(AdminDispatchContext);
  const [booking, setBooking] = useState<IBooking>();

  useEffect(() => {
    if (booking) return;

    const findBooking = bookings.find((booking) => booking._id === id);
    if (findBooking) {
      setBooking(findBooking);
    }
    console.log(findBooking);
  }, [booking, id]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setBooking({
      ...booking,
      numberOfGuests: data.numberOfGuests,
      date: data.date,
      time: data.time,
      guest: {
        ...booking?.guest,
        name: data.guest.name,
        email: data.guest.email,
        phoneNumber: data.guest.phoneNumber,
      },
    });

    dispatch({
      type: ActionType.UPDATEBOOKING,
      payload: JSON.stringify(booking),
    });
  };
  const updateForm = (
    <>
      <h3>Ändra bokning</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ColumnWrapper>
          <StyledInput
            type="number"
            placeholder="Antal gäster"
            id="numberOfGuests"
            defaultValue={booking?.numberOfGuests}
            {...register("numberOfGuests", {
              required: true,
              min: 1,
              max: 90,
            })}
            aria-invalid={errors.numberOfGuests ? "true" : "false"}
          />
          {errors.numberOfGuests?.type === "required" && (
            <StyledErrorParagraph role="alert">
              Du måste ange antal gäster
            </StyledErrorParagraph>
          )}
          {errors.numberOfGuests?.type === "max" && (
            <StyledErrorParagraph role="alert">
              Det går inte att boka sällskap större än 90
            </StyledErrorParagraph>
          )}
          <StyledInput
            type="text"
            placeholder="Datum"
            id="date"
            pattern="\d{4}-\d{2}-\d{2}"
            defaultValue={booking?.date.substring(0, 10)}
            {...register("date", { required: true })}
            aria-invalid={errors.date ? "true" : "false"}
          />
          {errors.date?.type === "required" && (
            <StyledErrorParagraph role="alert">
              Du måste ange ett datum.
            </StyledErrorParagraph>
          )}
          {errors.date?.type === "pattern" && (
            <StyledErrorParagraph role="alert">
              Datum ska skrivas YYYY-MM-DD
            </StyledErrorParagraph>
          )}
          <select {...register("time")} defaultValue={booking?.time}>
            <option value={"18:00"}>18:00</option>
            <option value={"21:00"}>21:00</option>
          </select>
          <StyledInput
            type="text"
            placeholder="Namn (för- och efternamn):"
            id="name"
            defaultValue={booking?.guest.name}
            {...register("guest.name", {
              required: true,
              maxLength: 150,
              pattern:
                /[A-Ö][a-ö]*((-|\s)*[A-Ö][a-ö])+\s*[A-Ö][a-ö]*((-|\s)*[A-Ö][a-ö])+\s*[A-Ö][a-ö]*((-|\s)*[A-Ö][a-ö])$/,
            })}
            aria-invalid={errors.guest?.name ? "true" : "false"}
          />
          {errors.guest?.name?.type === "required" && (
            <StyledErrorParagraph role="alert">
              Du måste ange namn
            </StyledErrorParagraph>
          )}

          {errors.guest?.name?.type === "maxLength" && (
            <StyledErrorParagraph role="alert">
              Namn får max vara 150 tecken.
            </StyledErrorParagraph>
          )}
          {errors.guest?.name?.type === "pattern" && (
            <StyledErrorParagraph role="alert">
              Du måste fylla i förnamn + efternamn (minst 2 bokstäver, ej
              otillåtna karaktärer).
            </StyledErrorParagraph>
          )}

          <StyledInput
            type="email"
            placeholder="E-post:"
            id="email"
            defaultValue={booking?.guest.email}
            {...register("guest.email", {
              required: true,
              pattern: /^[A-Z0-9+_.-]+@[A-Z0-9.-]+$/i,
            })}
            aria-invalid={errors.guest?.email ? "true" : "false"}
          />
          {errors.guest?.email?.type === "required" && (
            <StyledErrorParagraph role="alert">
              Epost-fältet får inte vara tomt.
            </StyledErrorParagraph>
          )}
          {errors.guest?.email?.type === "pattern" && (
            <StyledErrorParagraph role="alert">
              Felaktigt epost-format.
            </StyledErrorParagraph>
          )}

          <StyledInput
            type="tel"
            placeholder="Telefonnummer:"
            id="phoneNumber"
            defaultValue={booking?.guest?.phoneNumber}
            {...register("guest.phoneNumber", {
              required: true,
              pattern: /^(\+?46|0)7\d{8}$/,
            })}
            aria-invalid={errors.guest?.phoneNumber ? "true" : "false"}
          />
          {errors.guest?.phoneNumber?.type === "required" && (
            <StyledErrorParagraph role="alert">
              Telefonnummer-fältet får inte vara tomt.
            </StyledErrorParagraph>
          )}
          {errors.guest?.phoneNumber?.type === "pattern" && (
            <StyledErrorParagraph role="alert">
              Du behöver ange ett nummer i formatet +46705552222 alt.
              0705552222.
            </StyledErrorParagraph>
          )}
          <NormalButton type="submit">Boka</NormalButton>
        </ColumnWrapper>
      </form>
    </>
  );

  return <>{updateForm}</>;
};
