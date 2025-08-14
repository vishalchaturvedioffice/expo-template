import "@/styles/unistyles/unistyles";
import React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

const Page = () => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
    </View>
  );
};
const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.primary,
  },
}));
export default Page;
