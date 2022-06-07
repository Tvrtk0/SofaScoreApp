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
  const [selected, setSelected] = useState(false);
  const sportContext = useContext(SportContext);
  const removeStarUrl = sportContext?.isDarkTheme ? '/img/star1.svg' : '/img/star3.svg';
  const addStarUrl = sportContext?.isDarkTheme ? '/img/star2.svg' : '/img/star4.svg';

  useEffect(() => {
    if (localStorage.getItem(`favoriteEvent-${event.id}`) !== null) {
      setSelected(true);
    }
  }, []);

  useEffect(() => {
    if (selected) {
      localStorage.setItem(`favoriteEvent-${event.id}`, JSON.stringify(event));
      //window.dispatchEvent(new Event('storageChange'));
    } else {
      localStorage.removeItem(`favoriteEvent-${event.id}`);
      //window.dispatchEvent(new Event('storageChange'));
    }
  }, [selected]);

  const handleChange = () => {
    setSelected((prev) => !prev);
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
