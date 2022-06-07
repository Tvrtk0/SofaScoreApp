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
  const sportsInfo = useContext(SportContext);
  const urlCategoryDetails = `${API_BASENAME}/sport/${sportsInfo?.sport}/scheduled-events/${sportsInfo?.date}`;
  const { data, error } = useSWR(urlCategoryDetails);

  if (!data && !error) {
    return <CategoryLoading />;
  }
  if (!data) {
    return <div>An error has occurred...</div>;
  }

  return (
    <StyledScheduledEvents>
      <h2>{sportsInfo?.sport.charAt(0).toUpperCase() + sportsInfo?.sport.slice(1)!}</h2>
      <StyledDatePicker>
        <DatePicker />
      </StyledDatePicker>
      <EventGroups events={data.events} />
    </StyledScheduledEvents>
  );
}
