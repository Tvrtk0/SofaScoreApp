import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FullEvent } from '../../model/Event';
import Event from './Event';
import EventGroups from './EventGroups';

const StyledFavoriteEvents = styled.section`
  background-color: ${({ theme }) => theme.colors.bg1};
  padding: 1.5rem;
  border-radius: 10px;

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
  const [keys, setKeys] = useState<string[]>([]);
  const [favoriteEvents, setfavoriteEvents] = useState<FullEvent[]>();

  const updateKeys = () => {
    let keysList = Object.keys(localStorage).filter((key) => {
      return key.startsWith('favoriteEvent-');
    });
    setKeys(keysList);
  };

  useEffect(() => {
    updateKeys();
    /*window.addEventListener('storage', updateKeys);

    return () => {
      window.removeEventListener('storage', updateKeys);
    };*/
  }, []);

  useEffect(() => {
    let eventArray: FullEvent[] = [];

    keys.forEach((key) => {
      const eventJson: string | null = localStorage.getItem(key);
      if (eventJson !== null) eventArray.push(JSON.parse(eventJson));
    });

    setfavoriteEvents(eventArray);
  }, [keys]);

  return (
    <StyledFavoriteEvents>
      <h3>
        <Link href={'/favorites'}>Favorites</Link>
      </h3>
      {favoriteEvents &&
        favoriteEvents.slice(-5).map((event) => {
          return <Event key={`fav-${event.id}`} event={event} />;
        })}
    </StyledFavoriteEvents>
  );
}
