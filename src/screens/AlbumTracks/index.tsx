import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Animated } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme } from 'styled-components';

import { Container, Wrapper } from './styles';
import { Albums } from '@components/templates/Albums';
import { BottomMenu } from '@components/molecules/BottomMenu';
import { Icon } from '@components/atoms/Icon';

import { tracksActions } from '@store/slices/tracksSlice';
import { ITracksItems } from '@interfaces/Tracks';

import { RouterParams } from './types';

type MenuProps = {
    name: string;
    artist: string;
    thumbnail: string;
    preview_url: string;
}

export function AlbumTracks(){
    const [menu, setMenu] = useState<MenuProps>({} as MenuProps);
    const [menuVisible, setMenuVisible] = useState(false);
    const fadeAnim = useRef(new Animated.Value(0)).current

    const navigation = useNavigation();
    const route = useRoute<RouterParams>();
    const dispatch = useDispatch();
    const { isLoading, tracks } = useSelector(({ tracks: tracksData }) => tracksData);
    const { COLORS } = useTheme();

    const { playlist, background } = route.params;

    function goBack(){
        navigation.goBack();
    }

    function formattedTrackPlayer(item: ITracksItems){
        const formatted_data = {
            name: item?.track?.name,
            artist: item?.track.artists[0].name,
            thumbnail: item?.track?.album?.images[0].url,
            preview_url:  item?.track?.preview_url
        }
        setMenu(formatted_data);
        startAnimation();
    }

    const startAnimation = useCallback(() => {
        setMenuVisible(true);
        Animated.timing(
            fadeAnim,{
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }
          ).start();
      }, [fadeAnim]);

    useEffect(() => {
        dispatch(tracksActions.getTracks({ playlist: playlist?.id }));
    }, []);
   
    return (
        <>
            <Container colors={[background, COLORS.SECONDARY]}>
                <Wrapper onPress={goBack}>
                    <Icon name='left' size={24} type="antDesign" />
                </Wrapper>
                <Albums 
                    playlist={playlist} 
                    tracks={tracks?.items}
                    onPlay={(track) => formattedTrackPlayer(track)}
                    isLoading={isLoading}
                />
            </Container>
            
            { menuVisible && (
                <Animated.View style={{ opacity: fadeAnim }}>
                    <BottomMenu menu={menu} />
                </Animated.View>
            )}
        </>
    );
}