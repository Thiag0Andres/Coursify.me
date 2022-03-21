import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
import Routes from "./src/routes";
import theme from "./src/theme/theme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="#ffffff"
        translucent
        barStyle={"dark-content"}
      />
      <ThemeProvider theme={theme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Routes />
        </GestureHandlerRootView>
      </ThemeProvider>
    </NavigationContainer>
  );
}
