import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { SportContext } from '../../context/sportContext';
import { BasicEvent, FullEvent } from '../../model/Event';
import Event from './Event';
import EventGroups from './EventGroups';

const StyledFavoriteEvents = styled.section`
  background-color: ${({ theme }) => theme.colors.bg1};
  padding: 1.5rem;
  border-radius: 10px;
  ${({ noDisplay }: { noDisplay: boolean }) => noDisplay && 'display: none;'}

  & > h3 {
    margin-bottom: 1rem;
    text-align: center;
    & > a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.text};
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

export default function FavoriteEvents() {
  const sportContext = useContext(SportContext);

  return (
    <StyledFavoriteEvents noDisplay={sportContext?.favorites!.length === 0}>
      <h3>
        <Link href={'/favorites'}>Favorites</Link>
      </h3>

      {sportContext?.favorites
        .slice(-5)
        .reverse()
        .map((event) => {
          if (event) return <Event key={event.id} event={event} />;
        })}
    </StyledFavoriteEvents>
  );
}
