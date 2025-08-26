// Configure Unistyles before creating any styles
import "@/styles/unistyles/configure";
import { verticalScale } from "@/utils/scaling";
import { StyleSheet } from "react-native-unistyles";

const styles = StyleSheet.create((theme) => ({
    container: {
      borderRadius: theme.radius.md,
      alignItems: "center",
      justifyContent: "center",
      minHeight: 44,
      opacity: 1,
      width: "100%",
    },
    contentContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: theme.spacing.xs,
    },
    iconContainer: {
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: theme.colors.textOnPrimary,
      fontSize: theme.fontSize.md,
      fontWeight: theme.fontWeight.medium,
      fontFamily: theme.fontFamily.poppins.medium,
      textAlign: "center",
    },
    fullWidth: {
      width: "100%",
    },
    primary: {
      backgroundColor: theme.colors.primary,
      text: {
        color: theme.colors.textOnPrimary,
      },
    },
    secondary: {
      backgroundColor: theme.colors.secondary,
      text: {
        color: theme.colors.text,
      },
    },
    ghost: {
      backgroundColor: "transparent",
      text: {
        color: theme.colors.text,
      },
    },
    outline: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: theme.colors.primary,
      text: {
        color: theme.colors.primary,
      },
    },
    link: {
      backgroundColor: "transparent",
      text: {
        color: theme.colors.primary,
        textDecorationLine: "underline" as const,
      },
    },
    danger: {
      backgroundColor: theme.colors.error || "#ef4444",
      text: {
        color: theme.colors.textOnPrimary,
      },
    },
    success: {
      backgroundColor: theme.colors.success || "#22c55e",
      text: {
        color: theme.colors.textOnPrimary,
      },
    },
    disabled: {
      backgroundColor: theme.colors.secondary,
      opacity: 0.6,
      text: {
        color: theme.colors.textSecondary || theme.colors.text,
      },
    },
    xs: {
      paddingHorizontal: theme.spacing.xs,
      paddingVertical: 4,
      minHeight: verticalScale(20),
    },
    sm: {
      paddingHorizontal: theme.spacing.sm,
      minHeight: verticalScale(30),
    },
    md: {
      paddingHorizontal: theme.spacing.md,
      minHeight: verticalScale(40),
    },
    lg: {
      paddingHorizontal: theme.spacing.lg,
      minHeight: verticalScale(50),
    },
    xl: {
      paddingHorizontal: theme.spacing.lg * 1.5,
      paddingVertical: theme.spacing.lg,
      minHeight: verticalScale(60),
    },
    // Rounded variants
    roundedNone: {
      borderRadius: 0,
    },
    roundedSm: {
      borderRadius: theme.radius.sm,
    },
    roundedMd: {
      borderRadius: theme.radius.md,
    },
    roundedLg: {
      borderRadius: theme.radius.lg,
    },
    roundedFull: {
      borderRadius: 999,
    },
    // Text sizes for different button sizes
    sizeTextXs: {
      fontSize: theme.fontSize.xs,
      fontWeight: theme.fontWeight.medium,
    },
    sizeTextSm: {
      fontSize: theme.fontSize.sm,
      fontWeight: theme.fontWeight.medium,
    },
    sizeTextMd: {
      fontSize: theme.fontSize.md,
      fontWeight: theme.fontWeight.medium,
    },
    sizeTextLg: {
      fontSize: theme.fontSize.lg,
      fontWeight: theme.fontWeight.medium,
    },
    sizeTextXl: {
      fontSize: theme.fontSize.xl,
      fontWeight: theme.fontWeight.medium,
    },
    // Custom text sizes
    textSizeXs: {
      fontSize: theme.fontSize.xs,
    },
    textSizeSm: {
      fontSize: theme.fontSize.sm,
    },
    textSizeMd: {
      fontSize: theme.fontSize.md,
    },
    textSizeLg: {
      fontSize: theme.fontSize.lg,
    },
    textSizeXl: {
      fontSize: theme.fontSize.xl,
    },
  }));
  
export default styles;