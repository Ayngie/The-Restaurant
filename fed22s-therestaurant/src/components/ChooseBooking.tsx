import { NormalButton } from "./styled/StyledButtons";


  return (
    <>
      <ColumnWrapper>
        <RowWrapper>
          <NormalButton onClick={showCalendar}>Ny bokning</NormalButton>
          <NormalButton>Sök din bokning</NormalButton>
        </RowWrapper>
      </ColumnWrapper>
    </>
  );
};
