import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
    };
    fonts: {
      regular: string;
      medium: string;
      bold: string;
    };
  }
}