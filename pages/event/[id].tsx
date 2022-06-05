import { GetServerSideProps } from 'next';
import React from 'react';
import { BasicEvent } from '../../model/Event';
import fetcher from '../../util/fetch';

interface EventPageInterface {
  event: BasicEvent;
}

export default function EventDetailsPage({ event }: EventPageInterface) {
  return (
    <div>
      {event.homeTeam.name} {event.homeScore.display} - {event.awayScore.display} {event.awayTeam.name}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params, res } = context;

  try {
    //@ts-ignore
    const { slug, id } = params;

    const data = await fetcher(`https://academy.dev.sofascore.com/api/v1/event/${id}`);

    const props: EventPageInterface = { event: data.event };

    return {
      props: props,
    };
  } catch (error) {
    res.statusCode = 404;
    return { props: { error } };
  }
};
