import React from 'react';
import { StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_600SemiBold
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

import theme from './src/theme';

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
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
    </ThemeProvider>
  );
}