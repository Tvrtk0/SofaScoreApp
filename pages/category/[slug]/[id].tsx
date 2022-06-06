import { GetServerSideProps } from 'next';
import React from 'react';
import { BasicEvent } from '../../../model/Event';
import EventLink from '../../../modules/Link/EventLink';
import fetcher, { API_BASENAME } from '../../../util/fetch';

interface CategoryPageInterface {
  event: BasicEvent[];
}

export default function CategoryDetailsPage({ event }: CategoryPageInterface) {
  return (
    <ul>
      {event.map((e) => {
        return (
          <EventLink key={e.id} event={e}>
            <li>
              <a>
                {e.homeTeam.name} {e.homeScore.display} - {e.awayScore.display} {e.awayTeam.name}
              </a>
            </li>
          </EventLink>
        );
      })}
    </ul>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params, res } = context;

  try {
    //@ts-ignore
    const { slug, id } = params;

    const data = await fetcher(`${API_BASENAME}/category/${id}/scheduled-events/2022-05-28`);

    const props: CategoryPageInterface = { event: data.events };

    return {
      props: props,
    };
  } catch (error) {
    res.statusCode = 404;
    return { props: { error } };
  }
};
