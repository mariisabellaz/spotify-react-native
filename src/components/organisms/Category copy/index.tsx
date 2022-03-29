import React from 'react';

import { Container } from './styles';
import { Thumbnail } from '@components/atoms/Thumbnail';
import { Paragraph } from '@components/atoms/Typography/Paragraph';

import { CategoriesDTO } from '@interfaces/Categories';

type CategoryProps = {
    data: CategoriesDTO;
};

export function Category( { data, ...rest } : CategoryProps ){
    const { name, icons } = data;
console.log(icons)
    return (
        <Container>
            <Thumbnail source='https://t.scdn.co/media/derived/toplists_11160599e6a04ac5d6f2757f5511778f_0_0_275_275.jpg' size={128}/>
            <Paragraph 
                label={name} 
                ellipsizeMode="tail" 
                numberOfLines={1} 
                style={{textAlign: 'left', marginTop: 8}}
            />
        </Container>
    );
}
