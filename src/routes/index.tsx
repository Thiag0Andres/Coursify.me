import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Splashscreen, Home, InformativeContent } from "../screens";
import { SCREEN } from "./constant/route-name";

const { Navigator, Screen } = createNativeStackNavigator();

const Routes = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (isLoading) {
      handleSplashScreen();
    }
  }, []);

  const handleSplashScreen = async () => {
    // Splash screen will remain visible for 2.5 seconds
    const wait = (time: any) =>
      new Promise((resolve) => setTimeout(resolve, time));

    return wait(3000).then(() => setIsLoading(!isLoading));
  };

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {isLoading ? (
        <Screen component={Splashscreen} name={SCREEN.SPLASH} />
      ) : (
        <>
          <Screen component={Home} name={SCREEN.HOME} />
          <Screen
            component={InformativeContent}
            name={SCREEN.INFORMATIVECONTENT}
          />
        </>
      )}
    </Navigator>
  );
};

export default Routes;
