import { StyleSheet, UnistylesThemes } from "react-native-unistyles";
import { breakpoints } from "./breakpoints";
import { appThemes } from "./themes";

// Global flag to prevent multiple configurations
let isConfigured = false;

// Immediately configure Unistyles to prevent theme access errors
if (!isConfigured) {
  try {
    StyleSheet.configure({
      settings: { 
        initialTheme: "light" // Always start with light theme
      },
      breakpoints,
      themes: appThemes as UnistylesThemes,
    });
    isConfigured = true;
    console.log("✅ Unistyles configured successfully");
  } catch (error) {
    console.error("❌ Failed to configure Unistyles:", error);
  }
}

// Export a function to update theme after storage is ready
export const updateThemeFromStorage = () => {
  try {
    // Dynamically import storage to avoid circular dependencies
    import("@/utils/storage").then(({ getItem }) => {
      const preferred = getItem<keyof UnistylesThemes>("preferredTheme");
      if (preferred && preferred !== "light") {
        StyleSheet.configure({
          settings: { initialTheme: preferred },
          breakpoints,
          themes: appThemes as UnistylesThemes,
        });
        console.log(`✅ Theme updated to: ${preferred}`);
      }
    }).catch((error) => {
      console.warn("Failed to update theme from storage:", error);
    });
  } catch (error) {
    console.warn("Failed to access storage for theme:", error);
  }
};
