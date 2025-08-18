import { AppThemes } from "./types";

const fontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

const radius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
};

const shadow = {
  sm: {
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 25,
    elevation: 8,
  },
};

const opacity = {
  disabled: 0.5,
  hover: 0.8,
  pressed: 0.6,
};

const fontWeight = {
  thin: "100" as const,
  extraLight: "200" as const,
  light: "300" as const,
  normal: "400" as const,
  medium: "500" as const,
};

const fontFamily = {
  poppins: {
    regular: "Poppins-Regular",
    medium: "Poppins-Medium",
    bold: "Poppins-Bold",
    extraBold: "Poppins-ExtraBold",
    black: "Poppins-Black",
  },
};

export const lightTheme = {
  colors: {
    // Primary colors
    primary: "#3B82F6", // Blue-500 - Modern, trustworthy
    secondary: "#8B5CF6", // Violet-500 - Perfect complement to blue

    // Background hierarchy
    background: "#FFFFFF", // Pure white
    surface: "#F8FAFC", // Slate-50 - Cards, modals
    surfaceElevated: "#F1F5F9", // Slate-100 - Elevated elements

    // Text hierarchy
    text: "#0F172A", // Slate-900 - Primary text
    textSecondary: "#64748B", // Slate-500 - Secondary text
    textMuted: "#94A3B8", // Slate-400 - Muted text, placeholders
    textOnPrimary: "#FFFFFF", // White text on primary buttons

    // Interactive states
    primaryHover: "#2563EB", // Blue-600 - Hover state
    primaryPressed: "#1D4ED8", // Blue-700 - Pressed state
    secondaryHover: "#7C3AED", // Violet-600
    secondaryPressed: "#6D28D9", // Violet-700

    // Status colors
    success: "#10B981", // Emerald-500
    successBackground: "#D1FAE5", // Emerald-100
    warning: "#F59E0B", // Amber-500
    warningBackground: "#FEF3C7", // Amber-100
    error: "#EF4444", // Red-500
    errorBackground: "#FEE2E2", // Red-100
    info: "#06B6D4", // Cyan-500
    infoBackground: "#CFFAFE", // Cyan-100

    // Borders and dividers
    border: "#E2E8F0", // Slate-200
    borderSubtle: "#F1F5F9", // Slate-100
    divider: "#E2E8F0", // Slate-200

    // Overlays
    overlay: "rgba(15, 23, 42, 0.5)", // Semi-transparent dark
    backdrop: "rgba(15, 23, 42, 0.8)", // Modal backdrop
  },
  gap: (v: number) => v * 8,
  spacing,
  radius,
  fontSize,
  shadow,
  opacity,
  fontWeight,
  fontFamily,
};

export const darkTheme = {
  colors: {
    // Primary colors - Adjusted for better contrast on dark
    primary: "#60A5FA", // Blue-400 - Brighter for dark mode
    secondary: "#A78BFA", // Violet-400 - Lighter violet

    // Background hierarchy
    background: "#0F172A", // Slate-900 - Deep dark
    surface: "#1E293B", // Slate-800 - Cards, modals
    surfaceElevated: "#334155", // Slate-700 - Elevated elements

    // Text hierarchy
    text: "#F8FAFC", // Slate-50 - Primary text
    textSecondary: "#CBD5E1", // Slate-300 - Secondary text
    textMuted: "#94A3B8", // Slate-400 - Muted text, placeholders
    textOnPrimary: "#0F172A", // Dark text on light primary

    // Interactive states
    primaryHover: "#3B82F6", // Blue-500
    primaryPressed: "#2563EB", // Blue-600
    secondaryHover: "#8B5CF6", // Violet-500
    secondaryPressed: "#7C3AED", // Violet-600

    // Status colors - Brighter for dark mode
    success: "#34D399", // Emerald-400
    successBackground: "#064E3B", // Emerald-900
    warning: "#FBBF24", // Amber-400
    warningBackground: "#78350F", // Amber-900
    error: "#F87171", // Red-400
    errorBackground: "#7F1D1D", // Red-900
    info: "#22D3EE", // Cyan-400
    infoBackground: "#164E63", // Cyan-900

    // Borders and dividers
    border: "#475569", // Slate-600
    borderSubtle: "#334155", // Slate-700
    divider: "#475569", // Slate-600

    // Overlays
    overlay: "rgba(0, 0, 0, 0.6)", // Semi-transparent black
    backdrop: "rgba(0, 0, 0, 0.8)", // Modal backdrop
  },
  gap: (v: number) => v * 8,
  spacing,
  radius,
  fontSize,
  shadow,
  opacity,
  fontWeight,
  fontFamily,
};

const appThemes: AppThemes = {
  light: lightTheme,
  dark: darkTheme,
};

export { appThemes };

