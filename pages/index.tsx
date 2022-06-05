import Head from 'next/head';
import React from 'react';
import CategoryList from '../modules/Category/CategoryList';
import FavoriteEvents from '../modules/Event/FavoriteEvents';
import ScheduledEvents from '../modules/Event/ScheduledEvents';

const Home = () => {
  return (
    <div>
      <Head>
        <title>SofaScore App</title>
        <meta name="description" content="SofaScore Frontend Academy Project" />
        <meta name="author" content="Tvrtko Babić" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ display: 'flex', gap: '5rem', position: 'relative' }}>
        <CategoryList />
        <ScheduledEvents />
        {/* <p style={{ position: 'sticky', top: '1rem', height: '100px' }}>Favorite events: </p> */}
        <FavoriteEvents />
      </div>
    </div>
  );
};

export default Home;
