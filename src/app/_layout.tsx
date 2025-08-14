import { useAppStore } from "@/store";
import '@/styles/unistyles/unistyles';
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import FlashMessage from "react-native-flash-message";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { APIProvider } from "../api";

SplashScreen.preventAutoHideAsync();
// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 500,
  fade: true,
});

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);
  const isAuthenticated = useAppStore((state) => state.isAuthenticated);
  useEffect(() => {
    // Hide splash screen after a short delay
    const hideSplash = async () => {
      await SplashScreen.hideAsync();
    };
    hideSplash();

    const isReadyTimer = setTimeout(() => {
      setIsReady(true);
    }, 1000);

    return () => {
      clearTimeout(isReadyTimer);
    };
  }, []);

  return (
    <Providers>
      <Stack>
        <Stack.Protected guard={isAuthenticated}>
          <Stack.Screen name="(app)" options={{ headerShown: false }} />
        </Stack.Protected>
        <Stack.Protected guard={!isAuthenticated}>
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        </Stack.Protected>
        <Stack.Protected guard={!isReady}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack.Protected>
      </Stack>
    </Providers>
  );
}

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <KeyboardProvider>
        <APIProvider>{children}</APIProvider>
        <FlashMessage position="top" />
      </KeyboardProvider>
    </GestureHandlerRootView>
  );
}
