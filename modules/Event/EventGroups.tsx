import React from 'react';
import { FullEvent } from '../../model/Event';
import { groupEventsByTournament } from '../../util/group';
import EventGroup from './EventGroup';

interface EventGroupsProps {
  events: FullEvent[];
}

export default function EventGroups({ events }: EventGroupsProps) {
  const groupedEvents = groupEventsByTournament(events);

  return (
    <section>
      {groupedEvents.map((group) => {
        return <EventGroup key={group[0].tournament.id} events={group} />;
      })}
    </section>
  );
}
