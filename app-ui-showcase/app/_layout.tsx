import { Stack } from "expo-router";
import { PaperProvider, MD3LightTheme } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={MD3LightTheme}>
        <Stack>
          <Stack.Screen 
            name="index" 
            options={{ title: "Showcase Paper" }} 
          />
        </Stack>
      </PaperProvider>
    </SafeAreaProvider>
  );
}