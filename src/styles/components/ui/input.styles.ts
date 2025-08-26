// Configure Unistyles before creating any styles
import { InputState } from "@/components/ui/input";
import { isRTL } from "@/localization";
import "@/styles/unistyles/configure";
import { StyleSheet } from "react-native-unistyles";

const styles = StyleSheet.create((theme) => {
  return {
    topContainer: {
      gap: theme.spacing.xs,
      width: "100%",
    },
    container: (inputState: InputState) => ({
      paddingVertical: theme.spacing.xs,
      paddingHorizontal: theme.spacing.sm,
      borderRadius: theme.radius.lg,
      borderWidth: 1,
      borderColor: inputState.inputState === "focused" ? theme.colors.primary : theme.colors.border,
      flexDirection: isRTL ? 'row-reverse' : 'row',
    }),
    label: {
      fontSize: theme.fontSize.md,
      fontWeight: theme.fontWeight.medium,
      color: theme.colors.text,
      marginBottom: theme.spacing.xs,
    },
    error: {
      fontSize: theme.fontSize.sm,
      fontWeight: theme.fontWeight.medium,
      color: theme.colors.error,
    },
    inputContainer: {
      flexDirection: isRTL ? "row-reverse" : "row",
      alignItems: "center",
      gap: theme.spacing.sm,
      flex: 1,
    },
    input: {
      fontSize: theme.fontSize.lg,
      fontWeight: theme.fontWeight.normal,
      color: theme.colors.text,
      flex: 1,
      paddingHorizontal: 0,
    },
  };
});

export default styles;