import { StyleSheet } from "react-native-unistyles";

const styles = StyleSheet.create((theme) => ({
    container: {
      padding: theme.spacing.md,
      borderRadius: theme.radius.lg,
      alignItems: "center",
      justifyContent: "center",
      gap: theme.spacing.sm,
      flexDirection: "row",
      flexWrap: "wrap",
      width: "100%",
    },
    text: {
      color: theme.colors.textOnPrimary,
      fontSize: theme.fontSize.md,
      fontWeight: theme.fontWeight.medium,
      fontFamily: theme.fontFamily.poppins.medium,
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
      textDecorationLine: "underline",
      text: {
        color: theme.colors.text,
      },
    },
    sm: {
      paddingHorizontal: theme.spacing.sm,
      paddingVertical: theme.spacing.xs,
    },
    md: {
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
    },
    lg: {
      paddingHorizontal: theme.spacing.lg,
      paddingVertical: theme.spacing.md,
    },
  }));
  
export default styles;