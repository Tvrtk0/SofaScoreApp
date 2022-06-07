export interface StatisticsItem {
  name: string;
  home: string;
  away: string;
}

export interface StatisticsGroup {
  groupName: string;
  statisticsItems: StatisticsItem[];
}

export interface BasicEventStatistics {
  period: string;
  groups: StatisticsGroup[];
}

export interface Statistics {
  statistics: BasicEventStatistics[];
}
