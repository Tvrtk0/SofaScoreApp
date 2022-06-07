import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { SportContext } from '../context/sportContext';

const StyledDatePicker = styled.div`
  input[type='date'] {
    padding: 0.4rem 0.6rem;
    font-size: 0.8rem;
    outline: none;
    border: 0px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.bg2};
    color: ${({ theme }) => theme.colors.text};

    &::-webkit-calendar-picker-indicator {
      ${({ isDarkTheme }: { isDarkTheme: boolean }) => (isDarkTheme ? 'filter: invert(100%);' : '')}
      cursor: pointer;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.background};
    }
  }
`;

export default function DatePicker() {
  const sportsContext = useContext(SportContext);
  const [selectedDate, setSelectedDate] = useState(sportsContext?.date);

  const handleBlur = () => {
    if (selectedDate !== sportsContext?.date) sportsContext?.setDate(selectedDate!);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  return (
    <StyledDatePicker isDarkTheme={sportsContext?.isDarkTheme!}>
      <input
        type="date"
        value={selectedDate}
        onChange={(event) => handleDateChange(event)}
        onBlur={() => handleBlur()}
      />
    </StyledDatePicker>
  );
}
