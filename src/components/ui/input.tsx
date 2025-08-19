import input_styles from "@/styles/components/ui/input.styles";
import React from "react";
import { TextInput, TextInputProps, View } from "react-native";
import Text from "./text";

interface InputProps extends TextInputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  endIcon?: React.ReactNode;
}

const Input = ({
  placeholder,
  value,
  onChangeText,
  label,
  error,
  icon,
  iconPosition = "left",
  endIcon,
  ...props
}: InputProps) => {
  return (
    <View style={input_styles.container}>
      {label && <Text style={input_styles.label}>{label}</Text>}
      <View style={input_styles.inputContainer}>
        {icon && iconPosition === "left" && icon}
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          style={input_styles.input}
          {...props}
        />
        {icon && iconPosition === "right" && icon}
        {endIcon && endIcon}
      </View>
      {error && <Text style={input_styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
