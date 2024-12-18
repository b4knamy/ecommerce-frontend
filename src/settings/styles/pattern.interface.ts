import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    text: {
      size: {
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        title: string;
      };
      weight: {
        xsmall: number;
        small: number;
        medium: number;
        large: number;
        xlarge: number;
      };
    };
    colors: {
      primaryDark: string;
      secondaryDark: string;
      primaryGray: string;
      primaryLight: string;
      primaryGreen: string;
      primaryRed: string;
    };
    spacing: {
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
    };
  }
}
