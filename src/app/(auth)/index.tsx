// Configure Unistyles before creating any styles
import { Button, ControlledInput, WrapperContainer } from "@/components";
import Text from "@/components/ui/text";
import Icons from "@/constants/icons";
import { useFormState } from "@/hooks";
import { translate } from "@/localization";
import "@/styles/unistyles/configure";
import React from "react";
import { StyleSheet } from "react-native-unistyles";

const Page = () => {
  const { control, handleSubmit } = useFormState({
    email: "",
    password: "",
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <WrapperContainer style={styles.container}>
      <Icons.logo width={100} height={100} />
      <Text weight="bold" variant="h1" color="primary">
        {translate("welcome")}
      </Text>
      <ControlledInput
        control={control}
        name="email"
        placeholder="Email"
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        }}
        label="Email"
        keyboardType="email-address"
        autoComplete="email"
      />
      <ControlledInput
        control={control}
        name="password"
        placeholder="Password"
        rules={{
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
        }}
        label="Password"
        secureTextEntry
        autoComplete="password"
      />
      <Button title="Submit" size="md" variant="primary" onPress={onSubmit} />
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
