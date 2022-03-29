import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components/native';

import { Dashboard } from '@screens/Dashboard';
import { Search } from '@screens/Search';
import { CategoryStack } from '@routes/category';

import HomeIcon from '@assets/icons/home.svg';
import HomeActiveIcon from '@assets/icons/home_fill.svg';
import PlaylistIcon from '@assets/icons/playlist.svg';
import PlaylistActiveIcon from '@assets/icons/playlist_fill.svg';
import SearchIcon from '@assets/icons/search.svg';
import SearchActiveIcon from '@assets/icons/search_fill.svg';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppStack(){

    const { COLORS, FONTS, SIZES } = useTheme();

    return (
        <Navigator 
            screenOptions={{ 
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: COLORS.MENU_BOTTOM,
                    borderTopWidth: 0,
                },
                tabBarActiveTintColor: COLORS.TITLE
            }}>
            <Screen 
                name="home" 
                component={Dashboard} 
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        !focused 
                        ?  <HomeIcon width={28} height={28} /> 
                        :  <HomeActiveIcon width={32} height={32} />
                    ),
                }}
            />
           <Screen 
                name="search" 
                component={Search} 
                options={{
                    tabBarLabel: 'Pesquisa',
                    tabBarIcon: ({ color, focused }) => (
                        !focused 
                        ?  <SearchIcon width={28} height={28} /> 
                        :  <SearchActiveIcon width={32} height={32} />
                    ),
                }}
            />
            <Screen 
                name="category_stack" 
                component={CategoryStack} 
                options={{
                    tabBarLabel: 'Categoria',
                    tabBarIcon: ({ color, focused }) => (
                        !focused 
                        ?  <PlaylistIcon width={28} height={28} /> 
                        :  <PlaylistActiveIcon width={32} height={32} />
                    ),
                }}
            />
        </Navigator>
    );
}