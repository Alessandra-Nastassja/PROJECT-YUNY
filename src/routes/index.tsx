import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OnBoarding from '../pages/Onboarding';

const AppStack = createStackNavigator();

const Routes = () => {    
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: "#f0f0f5",
          },
        }}
      >
        <AppStack.Screen name="OnBoarding" component={OnBoarding} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;