import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, InformativeContent } from "../screens";
import { SCREEN } from "./constant/route-name";

const { Navigator, Screen } = createNativeStackNavigator();

const Routes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen component={Home} name={SCREEN.HOME} />
      <Screen component={InformativeContent} name={SCREEN.INFORMATIVECONTENT} />
    </Navigator>
  );
};

export default Routes;
