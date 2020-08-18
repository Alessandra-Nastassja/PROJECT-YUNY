import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar} from 'react-native';

// Importando loading
import { AppLoading } from 'expo';

// Importanto fonts
import { 
  Montserrat_400Regular, 
  Montserrat_600SemiBold,
  useFonts, 
} from '@expo-google-fonts/montserrat';

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular, 
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
    </>
  );
}