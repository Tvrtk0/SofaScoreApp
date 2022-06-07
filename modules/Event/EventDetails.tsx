import React from 'react';
import styled from 'styled-components';
import Meta from '../../components/Meta';
import { FullEvent } from '../../model/Event';
import { API_BASENAME } from '../../util/fetch';
import CategoryLink from '../Link/CategoryLink';
import UniqueTournamentLink from '../Link/UniqueTournamentLink';
import FavoriteEvents from './FavoriteEvents';

const StyledEventDetails = styled.section`
  background-color: ${({ theme }) => theme.colors.bg1};
  padding: 2rem;
  border-radius: 10px;
  & div > h1 {
    text-align: center;
    margin-top: 1rem;
  }
  .eventDetails {
    display: flex;
    gap: 5rem;
  }
`;
const StyledEventDetailsHeader = styled.header`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2rem;

  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textSecondary};
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  & h3 {
    font-weight: normal;
    & > a {
      cursor: pointer;
    }
    & a:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
const StyledTeam = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface EventDetailsProps {
  event: FullEvent;
}

export default function EventDetails({ event }: EventDetailsProps) {
  const homeTeamImg = `${API_BASENAME}/team/${event.homeTeam.id}/image`;
  const awayTeamImg = `${API_BASENAME}/team/${event.awayTeam.id}/image`;

  return (
    <StyledEventDetails>
      <Meta
        title={`${event.homeTeam.name} - ${event.awayTeam.name}`}
        description={`${event.tournament.name}: ${event.homeTeam.name} - ${event.awayTeam.name}`}
      />
      <div>
        <StyledEventDetailsHeader>
          <div>
            <CategoryLink category={event.tournament.category}>
              <a>{event.tournament.category.name}</a>
            </CategoryLink>
            {event.tournament.uniqueTournament ? (
              <UniqueTournamentLink uniqueTournament={event.tournament.uniqueTournament!}>
                <h3>
                  <a> {event.tournament.name}</a>
                </h3>
              </UniqueTournamentLink>
            ) : (
              <h3>{event.tournament.name}</h3>
            )}
          </div>
        </StyledEventDetailsHeader>

        <div className="eventDetails">
          <StyledTeam>
            <img src={homeTeamImg} alt={event.homeTeam.name} />
            {event.homeTeam.name}
          </StyledTeam>
          <StyledTeam>
            <img src={awayTeamImg} alt={event.awayTeam.name} />
            {event.awayTeam.name}
          </StyledTeam>
        </div>
        <h1>
          {event.homeScore.display} - {event.awayScore.display}
        </h1>
      </div>
      {/* <FavoriteEvents /> */}
    </StyledEventDetails>
  );
}
