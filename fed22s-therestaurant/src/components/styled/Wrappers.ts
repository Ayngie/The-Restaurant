import styled from "styled-components";

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: pink;
  min-height: 90vh;
  @media screen and (min-width: 1200px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const RowWrapperStatic = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const CalendarWrapper = styled.div`
  padding: 5%;
  width: 100%;

  button {
    background-color: white;
    border-radius: 15px;
    border: 0;
    padding: 15px;
    color: #db7093;
    margin: 2px;
    &:hover {
      background-color: #e59ab3;
      color: white;
    }
    &:disabled {
      color: lightgray !important;
    }
  }
  .react-calendar__tile--range {
    color: white !important;
    background-color: #db7093;
  }
  .react-calendar__navigation {
    display: flex;
    width: inherit;
  }
  .react-calendar__navigation__arrow {
    flex-grow: 0.32;
  }
  .react-calendar__month-view__weekdays {
    background-color: #db7093;
    border-radius: 10px;
    height: 30px;
    border: none;
    margin: 2px;
  }
  .react-calendar__month-view__weekdays__weekday {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
  abbr {
    text-decoration: none;
    text-transform: capitalize;
  }
  .react-calendar__tile {
    color: #db7093;
  }
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    background-color: #e6b4bc;
    color: white !important;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #8d228d;
  }
`;

export const SingleBookingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fffeeb;
  padding: 10px;
  margin: 10px;
  border: 2px solid white;
  border-radius: 10px;
`;
