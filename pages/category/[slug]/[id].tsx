import { GetServerSideProps } from 'next';
import React from 'react';
import { BasicEvent } from '../../../model/Event';
import EventLink from '../../../modules/Link/EventLink';
import fetcher from '../../../util/fetch';

interface CategoryPageInterface {
  event: BasicEvent[];
}

export default function CategoryDetailsPage({ event }: CategoryPageInterface) {
  return (
    <ul>
      {event.map((e) => {
        return (
          <li>
            <EventLink key={e.id} event={e}>
              <a>
                {e.homeTeam.name} {e.homeScore.display} - {e.awayScore.display} {e.awayTeam.name}
              </a>
            </EventLink>
          </li>
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

    const data = await fetcher(`https://academy.dev.sofascore.com/api/v1/category/${id}/scheduled-events/2022-05-28`);

    const props: CategoryPageInterface = { event: data.events };

    return {
      props: props,
    };
  } catch (error) {
    res.statusCode = 404;
    return { props: { error } };
  }
};
