import { darkTheme, lightTheme } from "../styles/unistyles/themes";

declare module "react-native-unistyles" {
  interface UnistylesThemes {
    light: typeof lightTheme;
    dark: typeof darkTheme;
  }
  interface UnistylesBreakpoints {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  }
}


