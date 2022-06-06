import React, { useContext } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import { SportContext } from '../../context/sportContext';
import { FullEvent } from '../../model/Event';
import { CategoryLoading } from '../../styles/StyledCategories';
import { API_BASENAME } from '../../util/fetch';
import EventGroups from './EventGroups';

const StyledScheduledEvents = styled.ul`
  background-color: ${({ theme }) => theme.colors.bg1};
  padding: 2rem;
  border-radius: 10px;

  .dateInput {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }

  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }

  input[type='date'] {
    padding: 0.4rem 0.6rem;
    font-size: 0.8rem;
    outline: none;
    border: 0px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.bg2};
    color: ${({ theme }) => theme.colors.text};

    &::-webkit-calendar-picker-indicator {
      filter: invert(100%);
      cursor: pointer;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.background};
    }
  }
`;

export default function ScheduledEvents() {
  const sportsInfo = useContext(SportContext);
  const urlCategoryDetails = `${API_BASENAME}/sport/${sportsInfo?.sport}/scheduled-events/${sportsInfo?.date}`;
  const { data, error } = useSWR(urlCategoryDetails);

  if (!data && !error) {
    return <CategoryLoading />;
  }
  if (!data) {
    return <div>An error has occurred...</div>;
  }

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    sportsInfo?.setDate(event.target.value);
  };

  return (
    <StyledScheduledEvents>
      <h2>{sportsInfo?.sport.charAt(0).toUpperCase() + sportsInfo?.sport.slice(1)!}</h2>
      <div className="dateInput">
        <input type="date" value={sportsInfo?.date} onChange={(event) => handleDateChange(event)} />
      </div>
      <EventGroups events={data.events} />
    </StyledScheduledEvents>
  );
}
