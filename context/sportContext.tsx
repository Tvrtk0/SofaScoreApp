import React from 'react';
import { BasicEvent, FullEvent } from '../model/Event';
import { Sports } from '../model/Sports';

interface SportContextInterface {
  date: string;
  sport: Sports;
  isDarkTheme: boolean;
  favorites: BasicEvent[];
  setSport: (param: Sports) => void;
  setDate: (param: string) => void;
  setIsDarkTheme: () => void;
  setFavorites: (param: BasicEvent[]) => void;
}

export const SportContext = React.createContext<SportContextInterface | null>(null);
