import React from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import { UniqueTournament } from '../../model/Tournament';
import { CategoryLoading } from '../../styles/StyledCategories';
import { apiUrl } from '../../util/fetch';
import UniqueTournamentLink from '../Link/UniqueTournamentLink';

interface CategoryTournamentsProps {
  id: number;
}

export default function CategoryTournaments({ id }: CategoryTournamentsProps) {
  const url = `${apiUrl}/unique-tournament/${id}`;
  const { data, error } = useSWR(url);

  if (!data && !error) {
    return <CategoryLoading />;
  }
  if (!data) {
    return <div>An error has occurred...</div>;
  }

  const uniqueTournament: UniqueTournament = data.uniqueTournament;

  return (
    // <li title={uniqueTournament.name}>
    <UniqueTournamentLink key={uniqueTournament.id} uniqueTournament={uniqueTournament}>
      <li title={uniqueTournament.name}>
        <a>{uniqueTournament.name}</a>
      </li>
    </UniqueTournamentLink>
    // </li>
  );
}
