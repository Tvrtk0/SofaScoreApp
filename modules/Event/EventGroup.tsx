import React from 'react';
import styled from 'styled-components';
import { FullEvent } from '../../model/Event';
import { Tournament, UniqueTournament } from '../../model/Tournament';
import CategoryLink from '../Link/CategoryLink';
import UniqueTournamentLink from '../Link/UniqueTournamentLink';
import Event from './Event';

const StyledEventGroup = styled.article`
  background-color: ${({ theme }) => theme.colors.bg2};
  padding: 0.6rem 1rem;
  margin: 1rem 0;
  border-radius: 10px;
  box-shadow: 3px 3px 5px ${({ theme }) => theme.colors.background};

  & a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    width: 100%;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  & ul {
    padding: 0;
    margin-top: 0.6rem;
  }

  & h4 {
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  & small a {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

interface EventGroupProps {
  events: FullEvent[];
}

export default function EventGroup({ events }: EventGroupProps) {
  const tournament: Tournament = events[0].tournament;
  const uniqueTournament: UniqueTournament | undefined = tournament.uniqueTournament;

  if (uniqueTournament === undefined) return <></>;

  return (
    <StyledEventGroup>
      <small>
        <CategoryLink key={tournament.category.id} category={tournament.category}></CategoryLink>
      </small>
      <UniqueTournamentLink key={uniqueTournament.id} uniqueTournament={uniqueTournament}>
        <h4>{tournament.name}</h4>
      </UniqueTournamentLink>
      <ul>
        {events.map((event) => {
          return <Event key={event.id} event={event} />;
        })}
      </ul>
    </StyledEventGroup>
  );
}
