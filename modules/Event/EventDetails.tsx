import React from 'react';
import Meta from '../../components/Meta';
import { FullEvent } from '../../model/Event';
import {
  StyledEventDetails,
  StyledEventDetailsHeader,
  StyledEventTitle,
  StyledTeam,
  StyledTeamSection,
} from '../../styles/StyledEventDetails';
import { API_BASENAME } from '../../util/fetch';
import CategoryLink from '../Link/CategoryLink';
import UniqueTournamentLink from '../Link/UniqueTournamentLink';

interface EventDetailsProps {
  event: FullEvent;
}

export default function EventDetails({ event }: EventDetailsProps) {
  const homeTeamImg = `${API_BASENAME}/team/${event.homeTeam.id}/image`;
  const awayTeamImg = `${API_BASENAME}/team/${event.awayTeam.id}/image`;
  const date = new Date(event.startTimestamp * 1000);
  const startDate = date.toLocaleString('en', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  const startTime = date.toLocaleString('en', {
    timeStyle: 'short',
  });

  return (
    <StyledEventDetails>
      <Meta
        title={`${event.homeTeam.name} - ${event.awayTeam.name}`}
        description={`${event.tournament.name}: ${event.homeTeam.name} - ${event.awayTeam.name}`}
      />
      <StyledEventDetailsHeader>
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
      </StyledEventDetailsHeader>

      <StyledTeamSection>
        <StyledTeam>
          <img src={homeTeamImg} alt={event.homeTeam.name} />
          {event.homeTeam.name}
        </StyledTeam>
        <StyledTeam>
          <img src={awayTeamImg} alt={event.awayTeam.name} />
          {event.awayTeam.name}
        </StyledTeam>
      </StyledTeamSection>

      <StyledEventTitle>
        <h1>
          {event.homeScore.display} - {event.awayScore.display}
        </h1>
        <div>
          <span>{startDate}</span>
          <br />
          <span>{startTime}</span>
        </div>
      </StyledEventTitle>
    </StyledEventDetails>
  );
}
