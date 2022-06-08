import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { SportContext } from '../context/sportContext';
import { BasicEvent, FullEvent } from '../model/Event';
import Event from '../modules/Event/Event';
import EventGroups from '../modules/Event/EventGroups';

const StyledFavorites = styled.div`
  & > h1 {
    margin-bottom: 2rem;
    text-align: center;
  }

  & > section {
    background-color: ${({ theme }) => theme.colors.bg1};
    padding: 1rem 2rem;
    border-radius: 10px;

    & > p {
      text-align: center;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileBreakpoint}) {
    & > h1 {
      margin-top: 2rem;
    }
  }
`;

export default function Favorites() {
  const sportContext = useContext(SportContext);

  return (
    <StyledFavorites>
      <h1>Favorite Events</h1>
      <section>
        {sportContext?.favorites.length !== 0 ? (
          <EventGroups events={sportContext?.favorites as FullEvent[]} />
        ) : (
          <p>No favorites found.</p>
        )}
      </section>
    </StyledFavorites>
  );
}
