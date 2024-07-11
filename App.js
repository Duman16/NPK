import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, ActivityIndicator } from "react-native";

import Frame2 from "./screens/Frame2";
import Frame3 from "./screens/Frame3";
import Frame4 from "./screens/Frame4";
import Frame5 from "./screens/Frame5";
import Frame6 from "./screens/Frame6";
import Frame7 from "./screens/Frame7";
import Frame8 from "./screens/Frame8";
import Frame9 from "./screens/Frame9";
import Frame10 from "./screens/Frame10";
import Frame11 from "./screens/Frame11";
import Frame12 from "./screens/Frame12";
import CreditTrackingScreen from "./screens/CreditTrackingScreen"; // Добавлен новый экран

import { getUserAccounts, getAccountBalance } from "./api"; // Импортируйте функции API
import { Color, FontFamily } from "./GlobalStyles"; // Импортируйте глобальные стили

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = useState(true);
  const [fontsLoaded] = useFonts({
    // Подгружаем шрифты
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
  });

  useEffect(() => {
    // Убираем заставку после загрузки шрифтов
    if (fontsLoaded) {
      setHideSplashScreen(false);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={Color.colorSienna} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {hideSplashScreen ? null : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Frame2" component={Frame2} />
          <Stack.Screen name="Frame3" component={Frame3} />
          <Stack.Screen name="Frame4" component={Frame4} />
          <Stack.Screen name="Frame5" component={Frame5} />
          <Stack.Screen name="Frame6" component={Frame6} />
          <Stack.Screen name="Frame7" component={Frame7} />
          <Stack.Screen name="Frame8" component={Frame8} />
          <Stack.Screen name="Frame9" component={Frame9} />
          <Stack.Screen name="Frame10" component={Frame10} />
          <Stack.Screen name="Frame11" component={Frame11} />
          <Stack.Screen name="Frame12" component={Frame12} />
          <Stack.Screen name="CreditTracking" component={CreditTrackingScreen} options={{ title: "Отслеживание кредитов" }} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;

