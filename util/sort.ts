import { CategoryInfo } from '../model/Categories';
import { Tournament } from '../model/Tournament';

export function sortCategories(categories: CategoryInfo[]): CategoryInfo[] {
  return categories.sort((a, b) => b.category.priority - a.category.priority);
}

export function sortTournaments(tournament: Tournament[]): Tournament[] {
  return tournament.sort((a, b) => b.priority - a.priority);
}
