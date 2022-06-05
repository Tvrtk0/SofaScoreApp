import { BasicTeam } from './Team';
import { Tournament } from './Tournament';

export interface Score {
  display: number;
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
  startTimestamp: number;
}
