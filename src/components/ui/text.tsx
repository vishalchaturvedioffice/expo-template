import { translate, TxKeyPath } from "@/localization";
import { text_styles } from "@/styles/components/ui";
import { fontScale } from "@/utils/scaling";
import React, { memo, useMemo } from "react";
import { Text as RNText, TextProps as RNTextProps, TextStyle } from "react-native";

// Typography variants following design system hierarchy
export type TextVariant = 
  | "display-xl" | "display-lg" | "display-md" | "display-sm"
  | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  | "body-xl" | "body-lg" | "body-md" | "body-sm" | "body-xs"
  | "caption" | "overline" | "label";

// Semantic color variants from theme
export type TextColor = 
  | "primary" | "secondary" | "muted" | "onPrimary"
  | "success" | "warning" | "error" | "info"
  | "inherit";

// Font weight options matching theme
export type TextWeight = 
  | "thin" | "extraLight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extraBold" | "black";

// Font family options from theme
export type FontFamily = 
  | "poppins-regular" | "poppins-medium" | "poppins-bold" | "poppins-extraBold" | "poppins-black";

// Text alignment options
export type TextAlign = "auto" | "left" | "right" | "center" | "justify";

// Text transform options
export type TextTransform = "none" | "capitalize" | "uppercase" | "lowercase";

// Text decoration options
export type TextDecoration = "none" | "underline" | "line-through" | "underline line-through";

export interface TextProps extends Omit<RNTextProps, 'style'> {
  children?: React.ReactNode;
  
  // Design system props
  variant?: TextVariant;
  color?: TextColor;
  weight?: TextWeight;
  fontFamily?: FontFamily;
  align?: TextAlign;
  transform?: TextTransform;
  decoration?: TextDecoration;
  
  // Translation props
  isDynamicText?: boolean;
  tx?: TxKeyPath;
  txOptions?: Record<string, any>;
  
  // Responsive sizing
  size?: number; // Custom font size
  responsive?: boolean; // Enable responsive scaling
  
  // Typography fine-tuning
  lineHeight?: number;
  letterSpacing?: number;
  
  // Layout props
  truncate?: boolean; // Single line with ellipsis
  maxLines?: number; // Multi-line truncation
  
  // Accessibility
  semanticRole?: 'heading' | 'label' | 'summary';
  
  // Style override (use sparingly)
  style?: TextStyle | TextStyle[];
  
  // Performance
  selectable?: boolean;
}

// Pre-computed style mappings for performance
const WEIGHT_MAPPING: Record<TextWeight, TextStyle['fontWeight']> = {
  thin: "100",
  extraLight: "200", 
  light: "300",
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extraBold: "800",
  black: "900",
} as const;

const TRANSFORM_MAPPING: Record<TextTransform, TextStyle['textTransform']> = {
  none: "none",
  capitalize: "capitalize",
  uppercase: "uppercase", 
  lowercase: "lowercase",
} as const;

const DECORATION_MAPPING: Record<TextDecoration, TextStyle['textDecorationLine']> = {
  none: "none",
  underline: "underline",
  "line-through": "line-through",
  "underline line-through": "underline line-through",
} as const;

const FONT_FAMILY_MAPPING: Record<FontFamily, string> = {
  "poppins-regular": "Poppins-Regular",
  "poppins-medium": "Poppins-Medium", 
  "poppins-bold": "Poppins-Bold",
  "poppins-extraBold": "Poppins-ExtraBold",
  "poppins-black": "Poppins-Black",
} as const;

const ALIGN_MAPPING: Record<TextAlign, TextStyle['textAlign']> = {
  auto: "auto",
  left: "left",
  right: "right", 
  center: "center",
  justify: "justify",
} as const;

/**
 * Enhanced Text component with full design system integration
 * 
 * Features:
 * - Complete typography scale with semantic variants
 * - Theme-aware colors with automatic dark mode support
 * - Responsive font scaling with device-specific optimization
 * - Comprehensive accessibility support
 * - Performance optimizations with memoization
 * - Type-safe props with comprehensive validation
 * 
 * @example
 * ```tsx
 * <Text variant="h1" color="primary" weight="bold">
 *   Main Heading
 * </Text>
 * 
 * <Text variant="body-md" color="muted" maxLines={2}>
 *   Body text that truncates after 2 lines...
 * </Text>
 * ```
 */
const Text = memo<TextProps>(({
  children,
  variant = "body-md",
  color = "inherit", 
  weight,
  fontFamily,
  align = "auto",
  transform = "none",
  decoration = "none",
  size,
  responsive = true,
  lineHeight,
  letterSpacing,
  truncate = false,
  maxLines,
  semanticRole,
  selectable = false,
  isDynamicText = false,
  tx,
  txOptions,
  style,
  ...props
}) => {
  // Memoize computed styles for performance
  const computedStyles = useMemo(() => {
    const baseStyle = text_styles[variant] || text_styles["body-md"];
    
    // Build style array
    const styles: TextStyle[] = [baseStyle as TextStyle];
    
    // Apply color if specified and not inherit
    if (color !== "inherit") {
      const colorKey = `color${color.charAt(0).toUpperCase()}${color.slice(1)}` as keyof typeof text_styles;
      const colorStyle = text_styles[colorKey];
      if (colorStyle) {
        styles.push(colorStyle as TextStyle);
      }
    }
    
    // Custom overrides
    const customStyle: TextStyle = {};
    
    // Font weight
    if (weight) {
      customStyle.fontWeight = WEIGHT_MAPPING[weight];
    }
    
    // Font family
    if (fontFamily) {
      customStyle.fontFamily = FONT_FAMILY_MAPPING[fontFamily];
    }
    
    // Text alignment
    if (align !== "auto") {
      customStyle.textAlign = ALIGN_MAPPING[align];
    }
    
    // Text transform
    if (transform !== "none") {
      customStyle.textTransform = TRANSFORM_MAPPING[transform];
    }
    
    // Text decoration
    if (decoration !== "none") {
      customStyle.textDecorationLine = DECORATION_MAPPING[decoration];
    }
    
    // Custom font size with responsive scaling
    if (size) {
      customStyle.fontSize = responsive ? fontScale(size) : size;
    }
    
    // Line height
    if (lineHeight) {
      customStyle.lineHeight = lineHeight;
    }
    
    // Letter spacing
    if (letterSpacing) {
      customStyle.letterSpacing = letterSpacing;
    }
    
    // Add custom style if any properties were set
    if (Object.keys(customStyle).length > 0) {
      styles.push(customStyle);
    }
    
    // Add user style override
    if (style) {
      if (Array.isArray(style)) {
        styles.push(...style);
      } else {
        styles.push(style);
      }
    }
    
    return styles;
  }, [variant, color, weight, fontFamily, align, transform, decoration, size, responsive, lineHeight, letterSpacing, style]);
  
  // Memoize accessibility props
  const accessibilityProps = useMemo(() => {
    const props: Partial<RNTextProps> = {};
    
    // Semantic role mapping
    if (semanticRole === 'heading') {
      props.accessibilityRole = 'header';
    } else if (semanticRole === 'label') {
      props.accessibilityRole = 'text';
    }
    
    // Add accessibility hint for truncated text
    if (truncate || maxLines) {
      props.accessibilityHint = "Text may be truncated";
    }
    
    return props;
  }, [semanticRole, truncate, maxLines]);
  
  // Memoize text props for truncation
  const textProps = useMemo(() => {
    const props: Partial<RNTextProps> = {};
    
    if (truncate) {
      props.numberOfLines = 1;
      props.ellipsizeMode = "tail";
    } else if (maxLines) {
      props.numberOfLines = maxLines;
      props.ellipsizeMode = "tail";
    }
    
    return props;
  }, [truncate, maxLines]);
  
  // Determine the text content to display
  const textContent = useMemo(() => {
    // If isDynamicText is true, return children as-is (dynamic text)
    if (isDynamicText) {
      return children;
    }
    
    // If tx prop is provided, use translation
    if (tx) {
      return translate(tx, txOptions);
    }
    
    // If isDynamicText is false and no tx prop, translate children if it's a string
    if (typeof children === 'string') {
      return translate(children as TxKeyPath, txOptions);
    }
    
    // Return children as-is for non-string content
    return children;
  }, [isDynamicText, tx, txOptions, children]);
  
  return (
    <RNText
      style={computedStyles}
      selectable={selectable}
      {...accessibilityProps}
      {...textProps}
      {...props}
    >
      {textContent}
    </RNText>
  );
});

Text.displayName = 'Text';

export default Text;
