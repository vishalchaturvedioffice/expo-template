import { fontScale } from "@/utils/scaling";
import { StyleSheet } from "react-native-unistyles";

const styles = StyleSheet.create((theme) => ({
  // Display variants - Large, impactful text
  "display-xl": {
    fontSize: fontScale(theme.fontSize.xxxl + 8), // ~40px
    fontWeight: theme.fontWeight.extraBold || "800",
    fontFamily: theme.fontFamily?.poppins?.extraBold || theme.fontFamily?.poppins?.bold,
    lineHeight: fontScale(theme.fontSize.xxxl + 8) * 1.1,
    letterSpacing: -0.5,
    color: theme.colors.text,
  },
  "display-lg": {
    fontSize: fontScale(theme.fontSize.xxxl), // ~32px
    fontWeight: theme.fontWeight.extraBold || "800",
    fontFamily: theme.fontFamily?.poppins?.extraBold || theme.fontFamily?.poppins?.bold,
    lineHeight: fontScale(theme.fontSize.xxxl) * 1.15,
    letterSpacing: -0.25,
    color: theme.colors.text,
  },
  "display-md": {
    fontSize: fontScale(theme.fontSize.xxl + 4), // ~28px
    fontWeight: theme.fontWeight.bold || "700",
    fontFamily: theme.fontFamily?.poppins?.bold,
    lineHeight: fontScale(theme.fontSize.xxl + 4) * 1.2,
    letterSpacing: -0.25,
    color: theme.colors.text,
  },
  "display-sm": {
    fontSize: fontScale(theme.fontSize.xxl), // ~24px
    fontWeight: theme.fontWeight.bold || "700",
    fontFamily: theme.fontFamily?.poppins?.bold,
    lineHeight: fontScale(theme.fontSize.xxl) * 1.25,
    color: theme.colors.text,
  },

  // Heading variants - Semantic heading hierarchy
  h1: {
    fontSize: fontScale(theme.fontSize.xxl), // ~24px
    fontWeight: theme.fontWeight.bold || "700",
    fontFamily: theme.fontFamily?.poppins?.bold,
    lineHeight: fontScale(theme.fontSize.xxl) * 1.25,
    color: theme.colors.text,
  },
  h2: {
    fontSize: fontScale(theme.fontSize.xl), // ~20px
    fontWeight: theme.fontWeight.bold || "700",
    fontFamily: theme.fontFamily?.poppins?.bold,
    lineHeight: fontScale(theme.fontSize.xl) * 1.3,
    color: theme.colors.text,
  },
  h3: {
    fontSize: fontScale(theme.fontSize.lg), // ~18px
    fontWeight: theme.fontWeight.semibold || "600",
    fontFamily: theme.fontFamily?.poppins?.medium,
    lineHeight: fontScale(theme.fontSize.lg) * 1.35,
    color: theme.colors.text,
  },
  h4: {
    fontSize: fontScale(theme.fontSize.md), // ~16px
    fontWeight: theme.fontWeight.semibold || "600",
    fontFamily: theme.fontFamily?.poppins?.medium,
    lineHeight: fontScale(theme.fontSize.md) * 1.4,
    color: theme.colors.text,
  },
  h5: {
    fontSize: fontScale(theme.fontSize.sm), // ~14px
    fontWeight: theme.fontWeight.semibold || "600",
    fontFamily: theme.fontFamily?.poppins?.medium,
    lineHeight: fontScale(theme.fontSize.sm) * 1.45,
    color: theme.colors.text,
  },
  h6: {
    fontSize: fontScale(theme.fontSize.xs), // ~12px
    fontWeight: theme.fontWeight.semibold || "600",
    fontFamily: theme.fontFamily?.poppins?.medium,
    lineHeight: fontScale(theme.fontSize.xs) * 1.5,
    color: theme.colors.text,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },

  // Body text variants - Main content text
  "body-xl": {
    fontSize: fontScale(theme.fontSize.lg), // ~18px
    fontWeight: theme.fontWeight.normal || "400",
    fontFamily: theme.fontFamily?.poppins?.regular,
    lineHeight: fontScale(theme.fontSize.lg) * 1.6,
    color: theme.colors.text,
  },
  "body-lg": {
    fontSize: fontScale(theme.fontSize.md + 1), // ~17px
    fontWeight: theme.fontWeight.normal || "400",
    fontFamily: theme.fontFamily?.poppins?.regular,
    lineHeight: fontScale(theme.fontSize.md + 1) * 1.6,
    color: theme.colors.text,
  },
  "body-md": {
    fontSize: fontScale(theme.fontSize.md), // ~16px
    fontWeight: theme.fontWeight.normal || "400",
    fontFamily: theme.fontFamily?.poppins?.regular,
    lineHeight: fontScale(theme.fontSize.md) * 1.6,
    color: theme.colors.text,
  },
  "body-sm": {
    fontSize: fontScale(theme.fontSize.sm), // ~14px
    fontWeight: theme.fontWeight.normal || "400",
    fontFamily: theme.fontFamily?.poppins?.regular,
    lineHeight: fontScale(theme.fontSize.sm) * 1.6,
    color: theme.colors.text,
  },
  "body-xs": {
    fontSize: fontScale(theme.fontSize.xs), // ~12px
    fontWeight: theme.fontWeight.normal || "400",
    fontFamily: theme.fontFamily?.poppins?.regular,
    lineHeight: fontScale(theme.fontSize.xs) * 1.6,
    color: theme.colors.text,
  },

  // Specialized text variants
  caption: {
    fontSize: fontScale(theme.fontSize.xs), // ~12px
    fontWeight: theme.fontWeight.normal || "400",
    fontFamily: theme.fontFamily?.poppins?.regular,
    lineHeight: fontScale(theme.fontSize.xs) * 1.4,
    color: theme.colors.textMuted,
  },
  overline: {
    fontSize: fontScale(theme.fontSize.xs - 1), // ~11px
    fontWeight: theme.fontWeight.medium || "500",
    fontFamily: theme.fontFamily?.poppins?.medium,
    lineHeight: fontScale(theme.fontSize.xs - 1) * 1.3,
    color: theme.colors.textSecondary,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  label: {
    fontSize: fontScale(theme.fontSize.sm), // ~14px
    fontWeight: theme.fontWeight.medium || "500",
    fontFamily: theme.fontFamily?.poppins?.medium,
    lineHeight: fontScale(theme.fontSize.sm) * 1.4,
    color: theme.colors.text,
  },

  // Color variants - Semantic colors from theme
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  colorMuted: {
    color: theme.colors.textMuted,
  },
  colorOnPrimary: {
    color: theme.colors.textOnPrimary,
  },
  colorSuccess: {
    color: theme.colors.success,
  },
  colorWarning: {
    color: theme.colors.warning,
  },
  colorError: {
    color: theme.colors.error,
  },
  colorInfo: {
    color: theme.colors.info,
  },

  // Utility styles for common patterns
  truncate: {
    overflow: "hidden",
  },
  
  // Link styling
  link: {
    color: theme.colors.primary,
    textDecorationLine: "underline",
  },
  
  // Emphasis styles
  strong: {
    fontWeight: theme.fontWeight.bold || "700",
    fontFamily: theme.fontFamily?.poppins?.bold,
  },
  emphasis: {
    fontStyle: "italic",
  },
  
  // Code-like text
  code: {
    fontFamily: "monospace",
    backgroundColor: theme.colors.surfaceElevated,
    paddingHorizontal: theme.spacing.xs,
    paddingVertical: 2,
    borderRadius: theme.radius.sm,
    fontSize: fontScale(theme.fontSize.sm - 1),
  },
}));

export default styles;
