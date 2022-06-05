import { FullEvent } from '../model/Event';
import { sortTournaments } from './sort';

export const groupEventsByTournament = (data: FullEvent[]): FullEvent[][] => {
  const tournaments = sortTournaments(
    data
      .map((event) => event.tournament)
      .filter((value, index, self) => index === self.findIndex((t) => t.id === value.id))
  );

  const groupedEvents: FullEvent[][] = [];
  tournaments.forEach((tournament) => {
    groupedEvents.push(
      data.filter((event) => {
        return event.tournament.id === tournament.id;
      })
    );
  });
  return groupedEvents;
};
