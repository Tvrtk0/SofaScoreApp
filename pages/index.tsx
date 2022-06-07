import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import CategoryList from '../modules/Category/CategoryList';
import FavoriteEvents from '../modules/Event/FavoriteEvents';
import ScheduledEvents from '../modules/Event/ScheduledEvents';

const StyledHome = styled.main`
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
    <div>
      <Head>
        <title>SofaScore App</title>
        <meta name="description" content="SofaScore Frontend Academy Project" />
        <meta name="author" content="Tvrtko Babić" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledHome>
        <CategoryList />
        <ScheduledEvents />
        <div className="sticky">
          <FavoriteEvents />
        </div>
      </StyledHome>
    </div>
  );
};

export default Home;
