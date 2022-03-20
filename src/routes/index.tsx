import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens";
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
    </Navigator>
  );
};

export default Routes;
