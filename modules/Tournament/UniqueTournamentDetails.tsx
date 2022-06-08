import React, { useContext } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import DatePicker from '../../components/DatePicker';
import Meta from '../../components/Meta';
import { SportContext } from '../../context/sportContext';
import { FullEvent } from '../../model/Event';
import { FullUniqueTournament, UniqueTournament } from '../../model/Tournament';
import { CategoryLoading } from '../../styles/StyledCategories';
import { API_BASENAME } from '../../util/fetch';
import EventGroups from '../Event/EventGroups';

const StyledUniqueTournamentDetails = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bg1};
  padding: 2rem;
  margin: 0 2rem;
  border-radius: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileBreakpoint}) {
    margin: 0;
    padding: 1rem;
  }

  & > h1 {
    margin-bottom: 0.5rem;
  }
`;

const StyledEvents = styled.section`
  section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1000px;

    & > * {
      flex-grow: 1;
      flex-basis: 100px;
      margin: 0.5rem;
    }
  }
`;

const StyledDatePicker = styled.div`
  margin-top: 3rem;
  margin-bottom: 1rem;
`;

interface UniqueTournamentDetailsProps {
  uniqueTournament: FullUniqueTournament;
}

export default function UniqueTournamentDetails({ uniqueTournament }: UniqueTournamentDetailsProps) {
  const sportsContext = useContext(SportContext);
  const imageUrl = `${API_BASENAME}/unique-tournament/${uniqueTournament.id}/image`;
  const eventsUrl = `${API_BASENAME}/category/${uniqueTournament.category.id}/scheduled-events/${sportsContext?.date}`;
  const { data, error } = useSWR(eventsUrl);

  if (!data && !error) {
    return <CategoryLoading />;
  }
  if (!data) {
    return <div>An error has occurred...</div>;
  }

  const datePickerDate = new Date(sportsContext?.date!).toDateString();
  const events: FullEvent[] = data.events.filter((event: FullEvent) => {
    return (
      event.tournament.uniqueTournament?.id === uniqueTournament.id &&
      new Date(event.startTimestamp * 1000).toDateString() === datePickerDate
    );
  });

  const startDateTimestamp = new Date(uniqueTournament.startDateTimestamp * 1000).toLocaleDateString('en', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  const endDateTimestamp = new Date(uniqueTournament.endDateTimestamp * 1000).toLocaleDateString('en', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <StyledUniqueTournamentDetails>
      <Meta title={uniqueTournament.name} description={`${uniqueTournament.name} - all events`} />
      <img src={imageUrl} alt={uniqueTournament.name} />
      <h1>{uniqueTournament.name}</h1>
      <p>
        {startDateTimestamp} - {endDateTimestamp}
      </p>
      {uniqueTournament.titleHolder && <small>Title holder: {uniqueTournament.titleHolder.name}</small>}
      <StyledDatePicker>
        <DatePicker />
      </StyledDatePicker>
      <StyledEvents>
        <EventGroups events={events} />
      </StyledEvents>
    </StyledUniqueTournamentDetails>
  );
}
