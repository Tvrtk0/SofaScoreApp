export interface BasicCategory {
  id: number;
  name: string;
  slug: string;
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
