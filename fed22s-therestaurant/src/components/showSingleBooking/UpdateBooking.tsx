import { useForm, SubmitHandler } from "react-hook-form";
import { NormalButton, WarningButton } from "../styled/StyledButtons";
import { StyledInput } from "../styled/StyledInput";
import { ColumnWrapper, RowWrapper } from "../styled/Wrappers";
import { StyledErrorParagraph } from "../styled/input/StyledErrorParagraph";
import { IBooking } from "../../models/IBooking";

interface IUpdateBooking {
  updateBooking: IBooking;
}

type FormValues = {
  numberOfGuests: number;
  date: string;
  time: string;
  name: string;
  email: string;
  phoneNumber: string;
};
export const UpdateBooking = (updateBooking: IUpdateBooking) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = () => {
    console.log("click");
  };

  return (
    <>
      <h3>Ändra bokning</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ColumnWrapper>
          {/* boknings info */}
          <StyledInput
            type="number"
            placeholder="Antal gäster"
            id="numberOfGuests"
            // defaultValue={updateBooking.updateBooking.numberOfGuests}
            {...register("numberOfGuests", {
              required: true,
              min: 1,
              max: 90,
            })}
            aria-invalid={errors.name ? "true" : "false"}
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
            // defaultValue={updateBooking.updateBooking.date}
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
            {...register("time")}
            // defaultValue={updateBooking.updateBooking.time}
          >
            <option value={"18:00"}>18:00</option>
            <option value={"21:00"}>21:00</option>
          </select>
          {/* <StyledInput
            type="text"
            placeholder="Tid"
            id="time"
            {...register("time", { required: true })}
          /> */}
          {/* gäst info */}
          <StyledInput
            type="text"
            placeholder="Namn (för- och efternamn):"
            id="name"
            // defaultValue={updateBooking.updateBooking.guest.name}
            {...register("name", {
              required: true,
              maxLength: 150,
              pattern:
                /[A-Ö][a-ö]*((-|\s)*[A-Ö][a-ö])+\s*[A-Ö][a-ö]*((-|\s)*[A-Ö][a-ö])+\s*[A-Ö][a-ö]*((-|\s)*[A-Ö][a-ö])$/,
            })}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name?.type === "required" && (
            <StyledErrorParagraph role="alert">
              Du måste ange namn
            </StyledErrorParagraph>
          )}

          {errors.name?.type === "maxLength" && (
            <StyledErrorParagraph role="alert">
              Namn får max vara 150 tecken.
            </StyledErrorParagraph>
          )}
          {errors.name?.type === "pattern" && (
            <StyledErrorParagraph role="alert">
              Du måste fylla i förnamn + efternamn (minst 2 bokstäver, ej
              otillåtna karaktärer).
            </StyledErrorParagraph>
          )}

          <StyledInput
            type="email"
            placeholder="E-post:"
            id="email"
            // defaultValue={updateBooking.updateBooking.guest.email}
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9+_.-]+@[A-Z0-9.-]+$/i,
            })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email?.type === "required" && (
            <StyledErrorParagraph role="alert">
              Epost-fältet får inte vara tomt.
            </StyledErrorParagraph>
          )}
          {errors.email?.type === "pattern" && (
            <StyledErrorParagraph role="alert">
              Felaktigt epost-format.
            </StyledErrorParagraph>
          )}

          <StyledInput
            type="tel"
            placeholder="Telefonnummer:"
            id="phoneNumber"
            // defaultValue={updateBooking.updateBooking.guest.phoneNumber}
            {...register("phoneNumber", {
              required: true,
              pattern: /^(\+?46|0)7\d{8}$/,
            })}
            aria-invalid={errors.phoneNumber ? "true" : "false"}
          />
          {errors.phoneNumber?.type === "required" && (
            <StyledErrorParagraph role="alert">
              Telefonnummer-fältet får inte vara tomt.
            </StyledErrorParagraph>
          )}
          {errors.phoneNumber?.type === "pattern" && (
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
};
