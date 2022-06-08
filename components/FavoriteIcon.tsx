import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { SportContext } from '../context/sportContext';
import { BasicEvent } from '../model/Event';

const StyledIcon = styled.div`
  & > img {
    cursor: pointer;
  }
`;

interface FavoriteIconProps {
  event: BasicEvent;
}

export default function FavoriteIcon({ event }: FavoriteIconProps) {
  const [onClick, setOnClick] = useState(false);
  const [selected, setSelected] = useState(false);
  const sportContext = useContext(SportContext);
  const removeStarUrl = sportContext?.isDarkTheme ? '/img/star1.svg' : '/img/star3.svg';
  const addStarUrl = sportContext?.isDarkTheme ? '/img/star2.svg' : '/img/star4.svg';

  const localStorageEvents = () => localStorage.getItem(`favoriteEvents`);
  useEffect(() => {
    if (localStorageEvents() !== null) {
      if (JSON.parse(localStorageEvents()!).find((e: BasicEvent) => e.id === event.id)) {
        setSelected(true);
      }
    } else {
      localStorage.setItem(`favoriteEvents`, '[]');
    }
  }, []);

  useEffect(() => {
    if (onClick) {
      if (selected) {
        sportContext?.setFavorites([...JSON.parse(localStorageEvents()!), event]);
        localStorage.setItem(`favoriteEvents`, JSON.stringify([...JSON.parse(localStorageEvents()!), event]));
      } else {
        sportContext?.setFavorites(JSON.parse(localStorageEvents()!).filter((e: BasicEvent) => e.id !== event.id));
        localStorage.setItem(
          `favoriteEvents`,
          JSON.stringify(JSON.parse(localStorageEvents()!).filter((e: BasicEvent) => e.id !== event.id))
        );
      }
    }
  }, [selected]);

  const handleChange = () => {
    setSelected((prev) => !prev);
    setOnClick(() => true);
  };

  return (
    <StyledIcon>
      {selected ? (
        <img src={removeStarUrl} alt="Remove star" onClick={handleChange} title="Remove this event from favorites" />
      ) : (
        <img src={addStarUrl} alt="Add star" onClick={handleChange} title="Add this event to favorites" />
      )}
    </StyledIcon>
  );
}
