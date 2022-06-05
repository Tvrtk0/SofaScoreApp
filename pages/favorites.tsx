import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FullEvent } from '../model/Event';
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

    & > h3 {
      text-align: center;
    }
  }
`;

export default function Favorites() {
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
    window.addEventListener('storage', updateKeys);

    return () => {
      window.removeEventListener('storage', updateKeys);
    };
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
    <StyledFavorites>
      <h1>Favorite Events</h1>
      <section>
        <h3>Football</h3>
        {favoriteEvents && <EventGroups events={favoriteEvents!} />}
      </section>
    </StyledFavorites>
  );
}
