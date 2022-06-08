import React, { useContext } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import DatePicker from '../../components/DatePicker';
import Meta from '../../components/Meta';
import { SportContext } from '../../context/sportContext';
import { FullEvent } from '../../model/Event';
import { CategoryLoading } from '../../styles/StyledCategories';
import { API_BASENAME } from '../../util/fetch';
import EventGroups from '../Event/EventGroups';

const StyledCategoryDetails = styled.section`
  padding: 2rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.bg1};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileBreakpoint}) {
    padding: 1rem;
  }

  & > h1 {
    text-align: center;
  }
`;

const StyledDatePicker = styled.div`
  text-align: center;
  margin-top: 1.5rem;
`;

interface CategoryDetailsProps {
  id: number;
}

export default function CategoryDetails({ id }: CategoryDetailsProps) {
  const sportsContext = useContext(SportContext);
  const eventsUrl = `${API_BASENAME}/category/${id}/scheduled-events/${sportsContext?.date}`;
  const { data, error } = useSWR(eventsUrl);

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
    <StyledCategoryDetails>
      <Meta
        title={events[0].tournament.category.name}
        description={`${events[0].tournament.category.name} - list of tournaments`}
      />
      <h1>{events[0].tournament.category.name}</h1>
      <StyledDatePicker>
        <DatePicker />
      </StyledDatePicker>
      <EventGroups events={events} />
    </StyledCategoryDetails>
  );
}