import { moderateScale } from "@/utils/scaling";
import type { ImageProps, ImageStyle } from "expo-image";
import { Image as NImage } from "expo-image";
import * as React from "react";
import { StyleProp } from "react-native";

export type ImgProps = ImageProps & {
  style?: StyleProp<ImageStyle>;
  placeholder?: string;
  height?: number;
  width?: number;
  size?: number;
};

export const Image = ({
  style,
  placeholder = "L6PZfSi_.AyE_3t7t7R**0o#DgR4",
  height,
  width,
  size,
  ...props
}: ImgProps) => {
  const sizeStyle: ImageStyle = {};

  if (typeof size === "number") {
    sizeStyle.height = moderateScale(size);
    sizeStyle.width = moderateScale(size);
  } else {
    if (typeof height === "number") sizeStyle.height = moderateScale(height);
    if (typeof width === "number") sizeStyle.width = moderateScale(width);
  }

  return (
    <NImage placeholder={placeholder} style={[style, sizeStyle]} {...props} />
  );
};

export const preloadImages = (sources: string[]) => {
  NImage.prefetch(sources);
};
