import { useForm, SubmitHandler } from "react-hook-form";
import { NormalButton } from "../styled/StyledButtons";
import { StyledInput } from "../styled/input/StyledInput";
import { ColumnWrapper } from "../styled/Wrappers";
import { StyledErrorParagraph } from "../styled/input/StyledErrorParagraph";
import { IBooking } from "../../models/IBooking";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { ActionType } from "../../reducers/AdminReducer";
import { AdminDispatchContext } from "../../contexts/AdminDispatchContext";
import { updateBooking } from "../../services/adminService";
import { useParams } from "react-router";

interface IBookingProps {
  booking: IBooking;
  guestAbleToBook: IBookedTables;
  updatingBooking(bookingUpdated: IBooking): void;
  updatedComplete(submitted: boolean): void;
}

export const UpdateBooking = ({
  booking,
  guestAbleToBook,
  updatedComplete,
  updatingBooking,
}: IBookingProps) => {
  const { id } = useParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useContext(AdminDispatchContext);
  const [maxGuestsForTables, setMaxGuestsForTables] = useState<IBookedTables>({
    tablesAtSix: 0,
    tablesAtNine: 0,
  });
  const [maxGuests, setMaxGuests] = useState(0);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<IBooking>({ defaultValues: booking });

  useEffect(() => {
    setValue("numberOfGuests", booking.numberOfGuests);
    setValue("date", booking.date.substring(0, 10));
    setValue("time", booking.time);
    setValue("guest.name", booking.guest.name);
    setValue("guest.email", booking.guest.email);
    setValue("guest.phoneNumber", booking.guest.phoneNumber);

    if (booking.time === "18:00") {
      setMaxGuests(guestAbleToBook.tablesAtSix * 6);
    }
    if (booking.time === "21:00") {
      setMaxGuests(guestAbleToBook.tablesAtNine * 6);
    }

    setMaxGuestsForTables({
      tablesAtSix: guestAbleToBook.tablesAtSix * 6,
      tablesAtNine: guestAbleToBook.tablesAtNine * 6,
    });
  }, [isSubmitted]);

  const updatetime = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "18:00") {
      setMaxGuests(maxGuestsForTables.tablesAtSix);
    }
    if (e.target.value === "21:00") {
      setMaxGuests(maxGuestsForTables.tablesAtNine);
    }
  };

  const onSubmit: SubmitHandler<IBooking> = async () => {
    const values = getValues();
    setIsSubmitted(true);

    const updatedBooking: IBooking = {
      _id: id,
      numberOfGuests: values.numberOfGuests,
      date: values.date,
      time: values.time,
      guest: {
        ...booking?.guest,
        name: values.guest.name,
        email: values.guest.email,
        phoneNumber: values.guest.phoneNumber,
      },
    };

    dispatch({
      type: ActionType.UPDATEBOOKING,
      payload: JSON.stringify(updatedBooking),
    });

    updatingBooking(updatedBooking);
    const response = await updateBooking(updatedBooking, booking._id || "");
    updatedComplete(isSubmitted);
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
            {...register("numberOfGuests", {
              required: true,
              min: 1,
              max: maxGuests + booking.numberOfGuests,
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
              Det går inte att boka sällskap större än{" "}
              {maxGuests + booking.numberOfGuests}
            </StyledErrorParagraph>
          )}
          {errors.numberOfGuests?.type === "min" && (
            <StyledErrorParagraph role="alert">
              Det går inte att boka bord utan gäster
            </StyledErrorParagraph>
          )}
          <StyledInput
            type="text"
            placeholder="Datum"
            id="date"
            pattern="\d{4}-\d{2}-\d{2}"
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
          <select
            placeholder="Välj antal gäster"
            required={true}
            {...register("time")}
            defaultValue={booking.time}
            onChange={(e) => updatetime(e)}
          >
            <option value={"18:00"}>18:00</option>
            <option value={"21:00"}>21:00</option>
          </select>
          <StyledInput
            type="text"
            placeholder="Namn (för- och efternamn):"
            id="name"
            {...register("guest.name", {
              required: true,
              maxLength: 150,
              pattern:
                /^([a-öA-Ö]{1,50}([^'])\s[a-öA-Ö]{1,50}[a-öA-Ö]{1,50}\s?([a-öA-Ö]{1,50})?)$/i,
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
          <NormalButton type="submit" disabled={isSubmitted}>
            Uppdatera bokning
          </NormalButton>
        </ColumnWrapper>
      </form>
    </>
  );

  return <>{updateForm}</>;
};
