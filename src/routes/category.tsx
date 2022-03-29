import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Playlist } from '@screens/Playlist';
import { Category } from '@screens/Category';
import { AlbumTracks } from '@screens/AlbumTracks';

const { Navigator, Screen } = createNativeStackNavigator();

export function CategoryStack(){
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="category" component={Category} />
            <Screen name="playlist" component={Playlist} />
            <Screen name="albumTracks" component={AlbumTracks} />
        </Navigator>
    );
}