import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { SportContext } from '../context/sportContext';
import { BasicEvent, FullEvent } from '../model/Event';
import Event from '../modules/Event/Event';
import EventGroups from '../modules/Event/EventGroups';
import { groupEventsBySport } from '../util/group';

const StyledFavorites = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 2rem;
  gap: 1rem;

  & > div {
    flex-grow: 1;
    flex-basis: 0;
    background-color: ${({ theme }) => theme.colors.bg1};
    padding: 1rem 2rem;
    border-radius: 10px;

    & > h3 {
      text-align: center;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.breakpoint2}) {
    margin: 1rem;
  }
`;

export default function Favorites() {
  const sportContext = useContext(SportContext);
  const eventsBySport = groupEventsBySport(sportContext?.favorites as FullEvent[]);

  return (
    <StyledFavorites>
      {sportContext?.favorites.length !== 0 ? (
        eventsBySport.map((events) => {
          return (
            <div key={events[0].tournament.category.sport.id}>
              <h3>{events[0].tournament.category.sport.name}</h3>
              <EventGroups events={events} />
            </div>
          );
        })
      ) : (
        <div>No favorites found.</div>
      )}
    </StyledFavorites>
  );
}
