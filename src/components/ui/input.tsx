import { input_styles as styles } from "@/styles";
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

export interface InputState {
  inputState: "default" | "focused";
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
  const [inputState, setInputState] = React.useState<InputState>({
    inputState: "default",
  });

  const handleFocus = () => {
    setInputState({ inputState: "focused" });
  };

  const handleBlur = () => {
    setInputState({ inputState: "default" });
  };

  return (
    <View style={styles.topContainer}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.container(inputState)}>
        <View style={styles.inputContainer}>
          {icon && iconPosition === "left" && icon}
          <TextInput
            placeholder={placeholder}
            value={value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={onChangeText}
            style={styles.input}
            {...props}
          />
          {icon && iconPosition === "right" && icon}
          {endIcon && endIcon}
        </View>
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
