import { GetServerSideProps } from 'next';
import React from 'react';
import { apiUrl } from '../../../util/fetch';
import { BasicEvent } from '../../../model/Event';
import fetcher from '../../../util/fetch';
import { UniqueTournament } from '../../../model/Tournament';

interface TournamentPageInterface {
  tournament: UniqueTournament;
}

export default function TournamentDetailsPage({ tournament }: TournamentPageInterface) {
  return <div>{tournament.name}</div>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params, res } = context;

  try {
    //@ts-ignore
    const { slug, id } = params;

    const data = await fetcher(`${apiUrl}/unique-tournament/${id}`);

    const props: TournamentPageInterface = { tournament: data.uniqueTournament };

    return { props: props };
  } catch (error) {
    res.statusCode = 404;
    return { props: { error } };
  }
};
