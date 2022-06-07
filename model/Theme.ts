import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      body: string;
      monospace: string;
    };
    colors: {
      primary: string;
      secondary: string;
      background: string;
      bg1: string;
      bg2: string;
      text: string;
      textSecondary: string;
      textTitle: string;
      light: string;
    };
    breakpoints: {
      mobileBreakpoint: string;
      breakpoint1: string;
    };
  }
}
