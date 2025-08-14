import { Dimensions } from "react-native";

export const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

// Guideline sizes based on standard mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

// Calculate scale factors with bounds to prevent extreme scaling
const widthScale = Math.min(WIDTH / guidelineBaseWidth, 2); // Max 2x scaling
const heightScale = Math.min(HEIGHT / guidelineBaseHeight, 2); // Max 2x scaling

// Basic horizontal scaling
const scale = (size: number) => {
  const newSize = widthScale * size;
  // Ensure minimum readable size
  return Math.max(newSize, size * 0.8);
};

// Vertical scaling
const verticalScale = (size: number) => {
  const newSize = heightScale * size;
  return Math.max(newSize, size * 0.8);
};

// Moderate scaling with factor (best for fonts)
const moderateScale = (size: number, factor = 0.5) => {
  const scaledSize = size + (scale(size) - size) * factor;
  return Math.max(scaledSize, size * 0.85); // Minimum 85% of original size
};

// Responsive font size with device category consideration
const fontScale = (size: number) => {
  const screenArea = WIDTH * HEIGHT;
  const baseArea = guidelineBaseWidth * guidelineBaseHeight;
  const areaRatio = screenArea / baseArea;

  // Different scaling for different device categories
  let scaleFactor;
  if (areaRatio < 0.7) {
    // Small screens (older phones)
    scaleFactor = 0.9;
  } else if (areaRatio > 2.5) {
    // Large screens (tablets)
    scaleFactor = 1.2;
  } else {
    // Normal phones
    scaleFactor = Math.sqrt(areaRatio) * 0.95;
  }

  const scaledSize = size * scaleFactor;

  // Ensure readability bounds
  return Math.max(size * 0.8, Math.min(size * 1.5, scaledSize));
};

export { fontScale, moderateScale, scale, verticalScale };

