import { BasicCategory } from './Categories';

export interface Tournament {
  id: number;
  slug: string;
  name: string;
  priority: number;
  category: BasicCategory;
  uniqueTournament?: UniqueTournament;
}

export interface UniqueTournament {
  id: number;
  slug: string;
  name: string;
}

export interface TitleHolder {
  id: number;
  name: string;
  slug: string;
}

export interface FullUniqueTournament extends UniqueTournament {
  category: BasicCategory;
  titleHolder: TitleHolder;
  startDateTimestamp: number;
  endDateTimestamp: number;
}
