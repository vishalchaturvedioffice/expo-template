import { wrapper_container_styles as styles } from "@/styles";
import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";

interface WrapperContainerProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const WrapperContainer: React.FC<WrapperContainerProps> = ({
  children,
  style,
}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default WrapperContainer;
