import React, { useContext } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import DatePicker from '../../components/DatePicker';
import { SportContext } from '../../context/sportContext';
import { FullEvent } from '../../model/Event';
import { CategoryLoading } from '../../styles/StyledCategories';
import { API_BASENAME } from '../../util/fetch';
import EventGroups from './EventGroups';

const StyledScheduledEvents = styled.ul`
  background-color: ${({ theme }) => theme.colors.bg1};
  padding: 2rem;
  border-radius: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileBreakpoint}) {
    padding: 1rem;
  }

  .dateInput {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }

  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }
`;

const StyledDatePicker = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

export default function ScheduledEvents() {
  const sportsContext = useContext(SportContext);
  const urlCategoryDetails = `${API_BASENAME}/sport/${sportsContext?.sport}/scheduled-events/${sportsContext?.date}`;
  const { data, error } = useSWR(urlCategoryDetails);

  if (!data && !error) {
    return <CategoryLoading />;
  }
  if (!data) {
    return <div>An error has occurred...</div>;
  }

  const datePickerDate = new Date(sportsContext?.date!).toDateString();
  const events: FullEvent[] = data.events.filter(
    (event: FullEvent) => new Date(event.startTimestamp * 1000).toDateString() === datePickerDate
  );

  return (
    <StyledScheduledEvents>
      <h2>{sportsContext?.sport.charAt(0).toUpperCase() + sportsContext?.sport.slice(1)!}</h2>
      <StyledDatePicker>
        <DatePicker />
      </StyledDatePicker>
      <EventGroups events={events} />
    </StyledScheduledEvents>
  );
}
