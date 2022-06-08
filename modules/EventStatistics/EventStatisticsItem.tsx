import React from 'react';
import styled from 'styled-components';
import { StatisticsItem } from '../../model/Statistics';

const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  font-size: 0.9rem;

  & > span {
    padding: 0.3rem 1.3rem;
    border-radius: 10px;
  }

  .active {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

interface EventStatisticsItemsProps {
  item: StatisticsItem;
}

export default function EventStatisticItem({ item }: EventStatisticsItemsProps) {
  return (
    <StyledItem>
      <span className={item.home > item.away ? 'active' : ''}>{item.home}</span>
      <span>{item.name}</span>
      <span className={item.home < item.away ? 'active' : ''}>{item.away}</span>
    </StyledItem>
  );
}
