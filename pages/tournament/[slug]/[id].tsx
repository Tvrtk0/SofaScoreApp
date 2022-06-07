import { GetServerSideProps } from 'next';
import React from 'react';
import { API_BASENAME } from '../../../util/fetch';
import fetcher from '../../../util/fetch';
import { FullUniqueTournament, UniqueTournament } from '../../../model/Tournament';
import UniqueTournamentDetails from '../../../modules/Tournament/UniqueTournamentDetails';

interface TournamentPageInterface {
  uniqueTournament: FullUniqueTournament;
}

export default function TournamentDetailsPage({ uniqueTournament }: TournamentPageInterface) {
  return <UniqueTournamentDetails key={uniqueTournament.id} uniqueTournament={uniqueTournament} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params, res, req } = context;

  try {
    //@ts-ignore
    const { slug, id } = params;

    const data = await fetcher(`${API_BASENAME}/unique-tournament/${id}`);

    if (data.error !== undefined) {
      if (data.error.code === 404) {
        return { notFound: true };
      }
    }

    const props: TournamentPageInterface = { uniqueTournament: data.uniqueTournament };

    return { props: props };
  } catch (error) {
    res.statusCode = 404;
    return { props: { error } };
  }
};
