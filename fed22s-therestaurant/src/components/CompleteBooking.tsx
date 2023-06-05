import { ChangeEvent, FormEvent, useState } from "react";
import { IGuest, defaultGuest } from "../models/IGuest";
import { ColumnWrapper, RowWrapper } from "./styled/Wrappers";
import { NormalButton, WarningButton } from "./styled/StyledButtons";

export const CompleteBooking = () => {
  const [guest, setGuest] = useState<IGuest>(defaultGuest);
  const [noOfGuests, setNoOfGuests] = useState<number>(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;

    if (e.target.type === "text") {
      setGuest({ ...guest, [name]: e.target.value });
    }
    if (e.target.type === "email") {
      setGuest({ ...guest, [name]: e.target.value });
    }
    if (e.target.type === "tel") {
      setGuest({ ...guest, [name]: e.target.value });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log("Guest:", guest);

    setGuest(defaultGuest);

    //Anropa
  };

  return (
    <>
      <h3>Vänligen fyll i dina kontaktuppgifter:</h3>
      <form onSubmit={handleSubmit}>
        <ColumnWrapper>
          <input
            type="text"
            value={guest.name}
            onChange={handleChange}
            name="name"
            placeholder="Namn (för- och efternamn):"
          />
          <input
            type="email"
            value={guest.email}
            onChange={handleChange}
            name="email"
            placeholder="E-post:"
          />
          <input
            type="tel"
            value={guest.phoneNumber}
            onChange={handleChange}
            name="phoneNumber"
            placeholder="Telefonnummer:"
          />
          <RowWrapper>
            <NormalButton>Spara</NormalButton>
            <WarningButton>Avbryt</WarningButton>
          </RowWrapper>
        </ColumnWrapper>
      </form>
    </>
  );
};
