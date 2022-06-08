import React, { useContext } from 'react';
import styled from 'styled-components';
import { SportContext } from '../context/sportContext';

const StyledThemeIcon = styled.div`
  cursor: pointer;
  padding: 0.6rem;
`;

export default function ThemeIcon() {
  const sportContext = useContext(SportContext);

  return (
    <StyledThemeIcon onClick={() => sportContext?.setIsDarkTheme()}>
      {sportContext?.isDarkTheme ? (
        <img src="/img/lightTheme.svg" alt="Light theme icon" width="25px" />
      ) : (
        <img src="/img/darkTheme.svg" alt="Dark theme icon" width="25px" />
      )}
    </StyledThemeIcon>
  );
}
