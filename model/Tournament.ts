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
