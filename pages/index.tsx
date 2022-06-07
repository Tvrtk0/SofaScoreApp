import React from 'react';
import styled from 'styled-components';
import CategoryList from '../modules/Category/CategoryList';
import FavoriteEvents from '../modules/Event/FavoriteEvents';
import ScheduledEvents from '../modules/Event/ScheduledEvents';

const StyledHome = styled.section`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileBreakpoint}) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    margin: 0;
    gap: 0;
  }
`;

const StyledCategoryList = styled.aside`
  @media (max-width: ${({ theme }) => theme.breakpoints.breakpoint1}) {
    display: none;
  }
`;

const StyledFavoriteEvents = styled.section`
  align-self: flex-start;
  position: sticky;
  top: 80px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileBreakpoint}) {
    position: relative;
    align-self: center;
    top: 0;
  }
`;

const Home = () => {
  return (
    <>
      <StyledHome>
        <StyledCategoryList>
          <CategoryList />
        </StyledCategoryList>
        <ScheduledEvents />
        <StyledFavoriteEvents>
          <FavoriteEvents />
        </StyledFavoriteEvents>
      </StyledHome>
    </>
  );
};

export default Home;
