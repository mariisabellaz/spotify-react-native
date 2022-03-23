import React from 'react';
import { StatusBar } from 'react-native';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_600SemiBold
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
});

  if (!fontLoaded) {
      return <AppLoading/>
  }
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
    </>
  );
}