import React, { useContext } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import DatePicker from '../../components/DatePicker';
import Meta from '../../components/Meta';
import { SportContext } from '../../context/sportContext';
import { FullEvent } from '../../model/Event';
import { CategoryLoading } from '../../styles/StyledCategories';
import { API_BASENAME } from '../../util/fetch';
import { groupEventsByUniqueTournament } from '../../util/group';
import EventGroups from '../Event/EventGroups';
import UniqueTournamentLink from '../Link/UniqueTournamentLink';

const StyledCategoryDetails = styled.section`
  padding: 2rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.bg1};
  max-width: 1000px;

  @media (max-width: ${({ theme }) => theme.breakpoints.breakpoint2}) {
    padding: 1rem;
  }

  & > h1 {
    text-align: center;
  }

  & > section {
    & h3 {
      text-align: center;
      & a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.text};
        &:hover {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }

    & > div {
      margin-top: 2rem;
      & > section {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0 2rem;
        & > * {
          flex-grow: 1;
          flex-basis: 0;
        }
      }
    }
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
  const events: FullEvent[][] = groupEventsByUniqueTournament(
    data.events.filter((event: FullEvent) => new Date(event.startTimestamp * 1000).toDateString() === datePickerDate)
  );

  const eventsName = events.length === 0 ? 'No events found for this date.' : events[0][0].tournament.category.name;

  return (
    <StyledCategoryDetails>
      <Meta title={eventsName} description={`${eventsName} - list of tournaments`} />
      <h1>{eventsName}</h1>
      <StyledDatePicker>
        <DatePicker />
      </StyledDatePicker>
      <section>
        {events.map((eventList, i) => {
          return (
            <div key={i}>
              <h3>
                <UniqueTournamentLink uniqueTournament={eventList[0].tournament.uniqueTournament!} />
              </h3>
              <EventGroups events={eventList} />
            </div>
          );
        })}
      </section>
    </StyledCategoryDetails>
  );
}
