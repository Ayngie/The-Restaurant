import { SearchBooking } from "../admin/SearchBooking";
import { ShowBookedTimes } from "../admin/ShowBookedTimes";
import { ColumnWrapper } from "../styled/Wrappers";

export const AdminHandleSearch = () => {
  return (
    <>
      <ColumnWrapper>
        <SearchBooking></SearchBooking>
        <ShowBookedTimes></ShowBookedTimes>
      </ColumnWrapper>
    </>
  );
};
