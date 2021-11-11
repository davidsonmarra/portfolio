import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      headerBackground: string;
      sidebarBackground: string;
      headerText: string;
      title: string;
      titleSecondary: string;
      text: string;
      primary: string;
      secondary: string;
      themeIcon: string;
      backgroundThemeIcon: string;
      backgroundThemeIcon2: string;
      filterIcon: string;
      filterText: string;
    };
  }
}