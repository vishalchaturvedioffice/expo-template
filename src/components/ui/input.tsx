import { isRTL } from "@/localization";
import { input_styles as styles } from "@/styles";
import React from "react";
import { TextInput, TextInputProps, View } from "react-native";
import Text from "./text";

export interface InputProps extends TextInputProps {
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

const Input = React.forwardRef<TextInput, InputProps>(({
  placeholder,
  value,
  onChangeText,
  label,
  error,
  icon,
  iconPosition = "left",
  endIcon,
  onBlur,
  ...props
}, ref) => {
  const [inputState, setInputState] = React.useState<InputState>({
    inputState: "default",
  });

  const handleFocus = () => {
    setInputState({ inputState: "focused" });
  };

  const handleBlur = (e?: any) => {
    setInputState({ inputState: "default" });
    // Call the passed onBlur prop if it exists
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <View style={styles.topContainer}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.container(inputState)}>
        <View style={styles.inputContainer}>
          {icon && ((isRTL && iconPosition === "right") || (!isRTL && iconPosition === "left")) && icon}
          <TextInput
            ref={ref}
            placeholder={placeholder}
            value={value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={onChangeText}
            style={[
              styles.input,
              {
                textAlign: isRTL ? 'right' : 'left',
                writingDirection: isRTL ? 'rtl' : 'ltr',
              }
            ]}
            {...props}
          />
          {/* Handle RTL icon positioning */}
          {icon && ((isRTL && iconPosition === "left") || (!isRTL && iconPosition === "right")) && icon}
          {endIcon && endIcon}
        </View>
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
});

Input.displayName = 'Input';

export default Input;
