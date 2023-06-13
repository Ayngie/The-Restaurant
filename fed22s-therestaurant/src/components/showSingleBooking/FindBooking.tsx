import { useForm } from "react-hook-form";
import { StyledInput } from "../styled/input/StyledInput";
import { NormalButton } from "../styled/StyledButtons";

interface FormValues {
  id: string;
}

interface IBookingIdProps {
  searchBooking(idToSearch: string): void;
}

export const FindBooking = ({ searchBooking }: IBookingIdProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit = async (data: any) => {
    // setIdToSearch(data.id);
    searchBooking(data.id);
    reset();
  };

  return (
    <>
      <h3>Hitta din bokning genom att fylla i boknings id:et!</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          id="id"
          type="text"
          minLength={24}
          maxLength={24}
          {...register("id")}
        />
        <NormalButton type="submit">Sök</NormalButton>
      </form>
    </>
  );
};
