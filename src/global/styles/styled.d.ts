import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      headerBackground: string;
      headerText: string;
      text: string;
      primary: string;
      secondary: string;
      themeIcon: string;
      backgroundThemeIcon: string;
      filterIcon: string;
      filterText: string;
    };
  }
}