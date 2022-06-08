import React from 'react';
import styled from 'styled-components';
import { StatisticsGroup } from '../../model/Statistics';
import EventStatisticItem from './EventStatisticsItem';

const StyledEventStatisticsGroup = styled.div`
  margin: 2rem 0;
  text-align: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.background};

  & > div:first-child {
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 10px;
    padding: 0.4rem 1rem;
  }

  & > ul {
    padding: 0;
  }

  &:last-child {
    border-bottom: none;
  }
`;

interface EventStatisticsGroupProps {
  group: StatisticsGroup;
}

export default function EventStatisticsGroup({ group }: EventStatisticsGroupProps) {
  return (
    <StyledEventStatisticsGroup>
      <div>{group.groupName}</div>
      <ul>
        {group.statisticsItems.map((item, i) => {
          return <EventStatisticItem key={i} item={item} />;
        })}
      </ul>
    </StyledEventStatisticsGroup>
  );
}
