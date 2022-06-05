import React from 'react';
import styled from 'styled-components';
import FavoriteIcon from '../../components/FavoriteIcon';
import { BasicEvent } from '../../model/Event';
import EventLink from '../Link/EventLink';

const StyledEvent = styled.li`
  margin-bottom: 0.6rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    cursor: pointer;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.text};
    width: 100%;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }

    & > span {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 3rem;
    }
  }
`;

interface EventProps {
  event: BasicEvent;
}

export default function Event({ event }: EventProps) {
  return (
    <StyledEvent>
      <FavoriteIcon event={event} />
      <EventLink key={event.id} event={event}>
        <a>
          <span>
            <span>{event.homeTeam.name}</span>
            <span>{event.homeScore.display}</span>
          </span>
          <span>
            <span>{event.awayTeam.name}</span>
            <span>{event.awayScore.display}</span>
          </span>
        </a>
      </EventLink>
    </StyledEvent>
  );
}
