export interface Sport {
  id: number;
  name: string;
  slug: string;
}

export interface BasicCategory {
  id: number;
  name: string;
  slug: string;
  sport: Sport;
}

export interface CategoryInfo {
  category: {
    id: number;
    name: string;
    slug: string;
    priority: number;
  };
  uniqueTournamentIds?: number[];
}
