import { button_styles } from "@/styles";
import React from "react";
import { ActivityIndicator, Pressable, PressableProps, Text } from "react-native";

interface ButtonProps extends PressableProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: "primary" | "secondary" | "ghost" | "outline" | "link";
  size?: "sm" | "md" | "lg";
}

const Button = ({
  title,
  onPress,
  disabled,
  loading,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) => {
  return (
    <Pressable
      style={[
        button_styles.container,
        button_styles[variant],
        button_styles[size],
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={button_styles[variant].text.color}
        />
      ) : (
        <Text style={[button_styles.text, button_styles[variant].text]}>
          {title}
        </Text>
      )}
    </Pressable>
  );
};

export default Button;
