import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  fonts: {
    body: '"Roboto", system-ui, sans-serif',
    monospace: '"Roboto Mono", monospace',
  },
  colors: {
    primary: '#03DAC6',
    secondary: '#018786',
    background: '#121212',
    bg1: '#1e1e1e',
    bg2: '#242424',
    text: '#d4d4d6',
    textSecondary: '#b1b1b4',
    textTitle: '#fff',
    light: '#b0b8ca',
  },
  breakpoints: {
    mobileBreakpoint: '600px',
    breakpoint1: '1200px',
  },
};

export const lightTheme: DefaultTheme = {
  fonts: {
    body: '"Roboto", system-ui, sans-serif',
    monospace: '"Roboto Mono", monospace',
  },
  colors: {
    primary: '#018786',
    secondary: '#03DAC6',
    background: '#e0e0e0',
    bg1: '#ebebeb',
    bg2: '#f2f2f2',
    text: '#212121',
    textSecondary: '#3c3c46',
    textTitle: '#000',
    light: '#b0b8ca',
  },
  breakpoints: {
    mobileBreakpoint: '600px',
    breakpoint1: '1200px',
  },
};
