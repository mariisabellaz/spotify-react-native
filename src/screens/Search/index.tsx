import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Container, Content } from './styles';
import { Searches } from '@components/templates/Searches';

import api from '@services/api';
import { SearchsDTO } from '@interfaces/Searches';

interface FormData {
    search: string;
}

export function Search(){   
    const dispatch = useDispatch();
    const [data, setData] = useState({} as SearchsDTO);
    const [isLoading, setIsLoading] = useState(false);
       
    async function onSend(form: FormData) {
        setIsLoading(true);
        try {
            const result = await api.get(`search?type=playlist,track,episode,artist&include_external=audio&q=${form.search}&limit=20`)
            setData(result?.data);
            setIsLoading(false);
            console.log(result)
        } catch (error) {
            setIsLoading(false);
            console.error(error);
        }
    }

    return (
        <Container> 
            <Content>
                { data && data !== null && (
                    <Searches 
                        title='Recent searches'
                        onSend={(form) => onSend(form)}
                        playlists={data.playlists}
                        tracks={data.tracks}
                        episodes={data.episodes}
                        artists={data.artists} 
                        isLoading={isLoading}
                    />
                )}
            </Content>
        </Container>
    );
}