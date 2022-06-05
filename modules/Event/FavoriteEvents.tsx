import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FullEvent } from '../../model/Event';
import Event from './Event';
import EventGroups from './EventGroups';

const StyledFavoriteEvents = styled.section`
  position: sticky;
  top: 1rem;
  height: 40vh;
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
    <StyledFavoriteEvents>
      {/* {favoriteEvents?.map((event) => {
        return <Event key={`fav-${event.id}`} event={event} />;
      })} */}
      test
      {favoriteEvents && <EventGroups events={favoriteEvents!} />}
    </StyledFavoriteEvents>
  );
}
