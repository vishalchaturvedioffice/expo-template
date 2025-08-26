// Configure Unistyles before creating any styles
import { Button, Input, WrapperContainer } from "@/components";
import Icons from "@/constants/icons";
import "@/styles/unistyles/configure";
import React from "react";
import { StyleSheet } from "react-native-unistyles";

const Page = () => {
  return (
    <WrapperContainer style={styles.container}>
      <Icons.logo width={100} height={100} />
      <Input placeholder="Email" label="Email" />
      <Input placeholder="Password" label="Password" error="Password is required" />
      <Button title="Login" size="md" variant="primary" onPress={() => {}} />
    </WrapperContainer>
  );
};
const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.md,
    backgroundColor: theme.colors.background,
    gap: theme.spacing.lg,
  },
}));
export default Page;
