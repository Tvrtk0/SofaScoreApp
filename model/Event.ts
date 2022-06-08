import { BasicTeam } from './Team';
import { Tournament } from './Tournament';

export interface Score {
  display: number;
}

export interface Referee {
  name: string;
  slug: string;
  id: number;
}

export interface Venue {
  city: {
    name: string;
  };
  stadium: {
    name: string;
  };
  country: {
    name: string;
  };
  id: number;
}

export interface BasicEvent {
  id: number;
  customId: string;
  homeTeam: BasicTeam;
  awayTeam: BasicTeam;
  homeScore: Score;
  awayScore: Score;
}

export interface FullEvent extends BasicEvent {
  tournament: Tournament;
  referee: Referee;
  venue: Venue;
  startTimestamp: number;
}
