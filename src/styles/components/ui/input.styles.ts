// Configure Unistyles before creating any styles
import { InputState } from "@/components/ui/input";
import "@/styles/unistyles/configure";
import { StyleSheet } from "react-native-unistyles";

const styles = StyleSheet.create((theme) => ({
  topContainer: {
    gap: theme.spacing.xs,
    width: "100%",
  },
  container: (inputState: InputState) => ({
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.sm,
    borderRadius: theme.radius.lg,
    borderWidth:  1,
    borderColor: inputState.inputState === "focused" ? theme.colors.primary : theme.colors.border,
  }),
  label: {
    fontSize: theme.fontSize.sm,
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
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.sm,
  },
  input: {
    fontSize: theme.fontSize.lg,
    fontWeight: theme.fontWeight.normal,
    color: theme.colors.text,
    flex: 1,
  },
  
}));

export default styles;