type AppBreakpoints = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

type ThemeColors = {
  // Primary palette
  primary: string;
  secondary: string;

  // Background hierarchy
  background: string;
  surface: string;
  surfaceElevated: string;

  // Text hierarchy
  text: string;
  textSecondary: string;
  textMuted: string;
  textOnPrimary: string;

  // Interactive states
  primaryHover: string;
  primaryPressed: string;
  secondaryHover: string;
  secondaryPressed: string;

  // Status colors
  success: string;
  successBackground: string;
  warning: string;
  warningBackground: string;
  error: string;
  errorBackground: string;
  info: string;
  infoBackground: string;

  // Borders and dividers
  border: string;
  borderSubtle: string;
  divider: string;

  // Overlays
  overlay: string;
  backdrop: string;
};

type Theme = {
  colors: ThemeColors;
  gap: (v: number) => number;
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  radius: {
    none: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    full: number;
  };
  fontSize: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
    xxxl: number;
  };
  shadow: {
    sm: {
      shadowOffset: { width: number; height: number };
      shadowOpacity: number;
      shadowRadius: number;
      elevation: number;
    };
    md: {
      shadowOffset: { width: number; height: number };
      shadowOpacity: number;
      shadowRadius: number;
      elevation: number;
    };
    lg: {
      shadowOffset: { width: number; height: number };
      shadowOpacity: number;
      shadowRadius: number;
      elevation: number;
    };
  };
  opacity: {
    disabled: number;
    hover: number;
    pressed: number;
  };
  fontWeight: {
    thin: string;
    extraLight: string;
    light: string;
    normal: string;
    medium: string;
    semibold: string;
    bold: string;
    extraBold: string;
    black: string;
  };
  fontFamily: {
    poppins: {
      regular: string;
      medium: string;
      bold: string;
      extraBold: string;
      black: string;
    };
  };
};

type AppThemes = {
  light: Theme;
  dark: Theme;
};

export type { AppBreakpoints, AppThemes, Theme, ThemeColors };

