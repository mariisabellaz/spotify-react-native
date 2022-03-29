import React from 'react';
import { FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { useNavigation } from '@react-navigation/native';

import { Container, Header } from './styles';
import { Playlist } from '@components/molecules/Playlist';
import { Subtitle } from '@components/atoms/Typography/Subtitle';
import { Loading } from '@components/atoms/Loading';
import { Icon } from '@components/atoms/Icon';
import { Pressable } from '@components/atoms/Pressable';

import { IPlaylistItems } from '@interfaces/Playlists';

type PlaylistProps = {
    playlists: IPlaylistItems[];
    isLoading: boolean;
    background: string;
}

export function Playlists({ playlists, isLoading, background } : PlaylistProps ){
    const navigation = useNavigation();

    function handleTracks(playlist: IPlaylistItems){
        navigation.navigate('albumTracks', { playlist, background })
    }

    function goBack(){
        navigation.goBack();
    }


    return (
            <Container>
                { isLoading 
                    ? <Loading />
                    : <FlatList 
                        data={playlists}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => ( 
                            <Playlist 
                                playlist={item} 
                                onClick={() => handleTracks(item)} 
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ 
                            marginHorizontal: 12, 
                            paddingTop: getStatusBarHeight() + 40 
                        }}
                        ListHeaderComponent={
                            <Header>
                                 <Pressable onPress={goBack}>
                                    <Icon name="left" size={24} type="antDesign" />
                                 </Pressable>
                                <Subtitle label='Music • Playlist' />
                            </Header>
                        }
                      /> 
                }
            </Container>
    );
}