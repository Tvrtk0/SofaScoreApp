import React from 'react';
import { Sports } from '../model/Sports';

interface SportContextInterface {
  date: string;
  sport: Sports;
  setSport: (param: Sports) => void;
  setDate: (param: string) => void;
}

export const SportContext = React.createContext<SportContextInterface | null>(null);
