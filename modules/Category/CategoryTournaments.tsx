import React from 'react';
import useSWR from 'swr';
import { UniqueTournament } from '../../model/Tournament';
import { CategoryLoading } from '../../styles/StyledCategories';
import { API_BASENAME } from '../../util/fetch';
import UniqueTournamentLink from '../Link/UniqueTournamentLink';

interface CategoryTournamentsProps {
  id: number;
}

export default function CategoryTournaments({ id }: CategoryTournamentsProps) {
  const url = `${API_BASENAME}/unique-tournament/${id}`;
  const { data, error } = useSWR(url);

  if (!data && !error) {
    return <CategoryLoading />;
  }
  if (!data) {
    return <div>An error has occurred...</div>;
  }

  const uniqueTournament: UniqueTournament = data.uniqueTournament;

  return (
    <UniqueTournamentLink key={uniqueTournament.id} uniqueTournament={uniqueTournament}>
      <li title={uniqueTournament.name}>
        <a>{uniqueTournament.name}</a>
      </li>
    </UniqueTournamentLink>
  );
}
