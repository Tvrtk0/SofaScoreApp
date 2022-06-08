import { GetServerSideProps } from 'next';
import React from 'react';
import { FullEvent } from '../../model/Event';
import EventDetails from '../../modules/Event/EventDetails';
import fetcher, { API_BASENAME } from '../../util/fetch';

interface EventPageInterface {
  event: FullEvent;
}

export default function EventDetailsPage({ event }: EventPageInterface) {
  return <EventDetails key={event.id} event={event} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params, res } = context;

  try {
    //@ts-ignore
    const { slug, id } = params;

    const data = await fetcher(`${API_BASENAME}/event/${id}`);

    if (data.error !== undefined) {
      if (data.error.code === 404) {
        return { notFound: true };
      }
    }

    const props: EventPageInterface = { event: data.event };

    return {
      props: props,
    };
  } catch (error) {
    res.statusCode = 404;
    return { props: { error } };
  }
};
