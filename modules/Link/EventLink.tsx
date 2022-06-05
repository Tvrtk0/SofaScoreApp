import Link from 'next/link';
import React, { PropsWithChildren } from 'react';
import { BasicEvent } from '../../model/Event';

interface P {
  event: BasicEvent;
}

export default function EventLink({ event, children }: PropsWithChildren<P>) {
  return (
    <Link
      href={{
        pathname: '/event/[id]',
        query: { id: event.id },
      }}
    >
      {children || 'undefined event link'}
    </Link>
  );
}
