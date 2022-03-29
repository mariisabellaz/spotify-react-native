import React, { useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from './styles';
import { Playlists } from '@components/templates/Playlists';

import { categoriesActions } from '@store/slices/categoriesSlice';

import { RouterParams } from './types';

export function Playlist(){
    const route = useRoute<RouterParams>();
    const dispatch = useDispatch();

    const { isLoading, playlists } = useSelector(({ categories: categoriesData }) => categoriesData);
    const { category, background } = route.params;

    useEffect(() => {
        dispatch(categoriesActions.getPlaylist({ category: category }));
    }, []);

    return (
        <Container>
            <Playlists 
                playlists={playlists.items} 
                isLoading={isLoading}
                background={background}
            />
        </Container>
    );
}