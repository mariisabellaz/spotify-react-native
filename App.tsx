import React from 'react';
import { ActivityIndicator, LogBox } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { Provider } from 'react-redux';

import { 
    useFonts,
    Montserrat_700Bold, 
    Montserrat_400Regular,
    Montserrat_500Medium
} from '@expo-google-fonts/montserrat';

import theme from './src/theme/index';

import { Routes } from '@routes/index';
import store from './src/store/store';

LogBox.ignoreAllLogs();

export default function App() {

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold
  });

  if(!fontsLoaded){
    return <ActivityIndicator size={30} color='#FFF' />
  };

  return (
    <ThemeProvider theme={theme}>
        <StatusBar style="light" translucent backgroundColor="transparent" />
        <Provider store={store}>
            <Routes/>
        </Provider>
    </ThemeProvider>
  );
}