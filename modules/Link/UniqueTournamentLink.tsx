import Link from 'next/link';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { UniqueTournament } from '../../model/Tournament';

const StyledTournamentLink = styled.a`
  cursor: pointer;
`;

interface P {
  uniqueTournament: UniqueTournament;
}

export default function UniqueTournamentLink({ uniqueTournament, children }: PropsWithChildren<P>) {
  return (
    <Link
      href={{
        pathname: '/tournament/[slug]/[id]',
        query: { slug: uniqueTournament.slug, id: uniqueTournament.id },
      }}
      title={uniqueTournament.name}
    >
      {children || uniqueTournament.name}
    </Link>
  );
}
