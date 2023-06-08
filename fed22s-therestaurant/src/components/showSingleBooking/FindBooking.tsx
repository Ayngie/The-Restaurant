import { useForm } from "react-hook-form";

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
        <input id="id" type="text" {...register("id")} />
        <button type="submit">Sök</button>
      </form>
    </>
  );
};
