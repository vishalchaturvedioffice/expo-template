import { StyleSheet } from "react-native-unistyles";

import { getItem } from "@/utils/storage";
import { breakpoints } from "./breakpoints";
import { appThemes } from "./themes";
import type { AppThemes } from "./types";

// Types are augmented in `src/typings/unistyles.d.ts`

const preferred = getItem<keyof AppThemes>("preferredTheme") ?? "light";

StyleSheet.configure({
  settings: { initialTheme: preferred },
  breakpoints,
  themes: appThemes as AppThemes,
});
