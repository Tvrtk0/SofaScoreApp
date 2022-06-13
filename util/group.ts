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

export const groupEventsByUniqueTournament = (data: FullEvent[]): FullEvent[][] => {
  const tournaments = data
    .map((event) => event.tournament.uniqueTournament)
    .filter((value, index, self) => index === self.findIndex((t) => t?.id === value?.id));

  const groupedEvents: FullEvent[][] = [];
  tournaments.forEach((uniqueTournament) => {
    groupedEvents.push(
      data.filter((event) => {
        return event.tournament.uniqueTournament?.id === uniqueTournament?.id;
      })
    );
  });
  return groupedEvents;
};

export const groupEventsBySport = (data: FullEvent[]): FullEvent[][] => {
  return data.reduce((result, currentValue) => {
    (result[currentValue.tournament.category.sport.id] = result[currentValue.tournament.category.sport.id] || []).push(
      currentValue
    );

    return result;
  }, [] as FullEvent[][]);
};
