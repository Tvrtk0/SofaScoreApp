import React from 'react';
import styled from 'styled-components';
import CategoryList from '../modules/Category/CategoryList';
import FavoriteEvents from '../modules/Event/FavoriteEvents';
import ScheduledEvents from '../modules/Event/ScheduledEvents';

const StyledHome = styled.section`
  display: flex;
  gap: 5rem;
  flex-wrap: wrap;
  .sticky {
    align-self: flex-start;
    position: sticky;
    top: 1rem;
  }
`;

const Home = () => {
  return (
    <>
      <StyledHome>
        <CategoryList />
        <ScheduledEvents />
        <div className="sticky">
          <FavoriteEvents />
        </div>
      </StyledHome>
    </>
  );
};

export default Home;
