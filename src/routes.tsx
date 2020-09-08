import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home';
import DecideProfession from './pages/Profession';
import OnBoarding from './pages/OnBoarding'

// Funciona como o roteamento da app
const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator 
                headerMode="none" 
                screenOptions={{
                    cardStyle: {
                        backgroundColor: '#FBFBFB'
                    }
                }}>
                <AppStack.Screen name="OnBoarding" component={OnBoarding} />
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="DecideProfession" component={DecideProfession} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;