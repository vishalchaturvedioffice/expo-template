import button_styles from "@/styles/components/ui/button.styles";
import { fontScale } from "@/utils/scaling";
import React, { memo, useCallback, useMemo } from "react";
import {
  ActivityIndicator,
  Platform,
  Pressable,
  PressableProps,
  Text,
  Vibration
} from "react-native";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "link";
type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
type ButtonRounded = "none" | "sm" | "md" | "lg" | "full";

interface ButtonProps extends Omit<PressableProps, 'onPress'> {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  hapticFeedback?: boolean;
  accessibilityLabel?: string;
  rounded?: ButtonRounded;
  fontSize?: number;
}

// Pre-computed style mappings for better performance
const SIZE_FONT_MAPPING = {
  xs: fontScale(12),
  sm: fontScale(14),
  md: fontScale(16),
  lg: fontScale(18),
  xl: fontScale(20),
} as const;

const SIZE_FONT_WEIGHT_MAPPING = {
  xs: 400,
  sm: 500,
  md: 600,
  lg: 700,
  xl: 800,
} as const;

// Haptic feedback helper - using native Vibration API for better compatibility
const triggerHapticFeedback = () => {
  if (Platform.OS === 'ios') {
    Vibration.vibrate(10); // Light haptic feedback
  } else if (Platform.OS === 'android') {
    Vibration.vibrate(50); // Short vibration for Android
  }
};

const Button = memo<ButtonProps>(({
  title,
  onPress,
  disabled = false,
  loading = false,
  variant = "primary",
  size = "md",
  fullWidth = false,
  hapticFeedback = true,
  accessibilityLabel,
  rounded,
  fontSize,
  ...props
}) => {
  const isDisabled = disabled || loading;
  
  // Memoize rounded style
  const roundedStyle = useMemo(() => {
    if (!rounded) return null;
    switch (rounded) {
      case "none": return button_styles.roundedNone;
      case "sm": return button_styles.roundedSm;
      case "md": return button_styles.roundedMd;
      case "lg": return button_styles.roundedLg;
      case "full": return button_styles.roundedFull;
      default: return null;
    }
  }, [rounded]);

  // Memoize styles to prevent recalculation on every render
  const containerStyles = useMemo(() => [
    button_styles.container,
    button_styles[variant],
    button_styles[size],
    fullWidth && button_styles.fullWidth,
    isDisabled && button_styles.disabled,
    roundedStyle,
  ], [variant, size, fullWidth, isDisabled, roundedStyle]);
  
  const textStyles = useMemo(() => {
    const customFontSize = fontSize ? fontScale(fontSize) : SIZE_FONT_MAPPING[size];
    const fontWeight = SIZE_FONT_WEIGHT_MAPPING[size];
    
    return [
      button_styles.text,
      button_styles[variant]?.text,
      {
        fontSize: customFontSize,
        fontWeight,
      },
    ];
  }, [variant, size, fontSize]);
  
  // Memoize text color for ActivityIndicator
  const indicatorColor = useMemo(() => {
    const variantStyle = button_styles[variant];
    return variantStyle?.text?.color || button_styles.text.color;
  }, [variant]);
  
  // Optimized onPress handler with haptic feedback
  const handlePress = useCallback(() => {
    if (isDisabled) return;
    
    if (hapticFeedback) {
      triggerHapticFeedback();
    }
    
    onPress();
  }, [onPress, isDisabled, hapticFeedback]);
  
  return (
    <Pressable
      style={containerStyles}
      onPress={handlePress}
      disabled={isDisabled}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || title}
      accessibilityState={{ disabled: isDisabled }}
      accessibilityHint={loading ? "Loading" : undefined}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={indicatorColor}
          accessibilityLabel="Loading"
        />
      ) : (
        <Text
          style={textStyles}
          numberOfLines={1}
          adjustsFontSizeToFit
          minimumFontScale={0.8}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
});

Button.displayName = 'Button';

export default Button;
export type { ButtonProps, ButtonRounded, ButtonSize, ButtonVariant };

