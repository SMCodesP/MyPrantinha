import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      currentLine: string;
      selection: string;
      foreground: string;
      comment: string;
      cyan: string;
      green: string;
      orange: string;
      pink: string;
      purple: string;
      red: string;
      yellow: string;
    };
    fonts: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  }
}
