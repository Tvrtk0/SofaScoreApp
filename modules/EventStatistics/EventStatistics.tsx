import React from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import { BasicEventStatistics, Statistics } from '../../model/Statistics';
import { CategoryLoading } from '../../styles/StyledCategories';
import { API_BASENAME } from '../../util/fetch';
import EventStatisticsGroup from './EventStatisticsGroup';

const StyledEventStatistics = styled.section`
  margin-top: 3rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.bg2};

  & > h2 {
    text-align: center;
  }

  @media (max-width: 450px) {
    padding: 0;
    background-color: ${({ theme }) => theme.colors.bg1};
  }
`;

interface EventStatisticsProps {
  eventId: number;
}

export default function EventStatistics({ eventId }: EventStatisticsProps) {
  const statsUrl = `${API_BASENAME}/event/${eventId}/statistics`;
  const { data, error } = useSWR<Statistics>(statsUrl);

  if (!data && !error) {
    return <CategoryLoading />;
  }
  if (!data) {
    return <div>An error has occurred...</div>;
  }

  const eventStatistics: BasicEventStatistics[] = data.statistics;

  return (
    <>
      {eventStatistics && (
        <StyledEventStatistics>
          <h2>Statistics</h2>
          {eventStatistics[0].groups.map((group, i) => {
            return <EventStatisticsGroup key={i} group={group} />;
          })}
        </StyledEventStatistics>
      )}
    </>
  );
}
