// Configure Unistyles before creating any styles
import { Button, Input } from "@/components";
import '@/styles/unistyles/configure';
import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

const Page = () => {
  return (
    <View style={styles.container}>
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <Button title="Login" size="md" variant="primary" onPress={() => {}} />
    </View>
  );
};
const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    padding: theme.spacing.md,
    backgroundColor: theme.colors.background,
    gap: theme.spacing.lg,
  },
}));
export default Page;
