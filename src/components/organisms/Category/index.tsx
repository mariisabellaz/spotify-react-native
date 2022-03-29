import React from 'react';
import { useTheme } from 'styled-components';

import { Container, Thumbnail, Wrapper } from './styles';
import { Card } from '@components/atoms/Card';
import { Paragraph } from '@components/atoms/Typography/Paragraph';

import { CategoriesDTO } from '@interfaces/Categories';

type CategoryProps = {
    data: CategoriesDTO;
    onClick: ( color: string ) => void;
};

export function Category( { data, onClick } : CategoryProps ){
    const { COLORS } = useTheme();
    const { name, icons } = data;

    const colors = [
        COLORS.COLORS_BACKGROUND.BACKGROUND_01,
        COLORS.COLORS_BACKGROUND.BACKGROUND_02,
        COLORS.COLORS_BACKGROUND.BACKGROUND_03,
        COLORS.COLORS_BACKGROUND.BACKGROUND_04,
        COLORS.COLORS_BACKGROUND.BACKGROUND_05,
        COLORS.COLORS_BACKGROUND.BACKGROUND_06,
        COLORS.COLORS_BACKGROUND.BACKGROUND_07,
        COLORS.COLORS_BACKGROUND.BACKGROUND_08,
        COLORS.COLORS_BACKGROUND.BACKGROUND_09,
        COLORS.COLORS_BACKGROUND.BACKGROUND_10,
        COLORS.COLORS_BACKGROUND.BACKGROUND_11,
        COLORS.COLORS_BACKGROUND.BACKGROUND_12,
    ];

    const backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    function getBakcground(color: string) {
        onClick(color);
    }

    return (
        <Card 
            height={80} 
            backgroundColor={backgroundColor} 
            onPress={() => getBakcground(backgroundColor)}>
            <Container>
                <Wrapper>
                    <Paragraph 
                        label={name} 
                        ellipsizeMode="tail" 
                        numberOfLines={2} 
                        style={{textAlign: 'center', marginTop: 8}}
                        bold
                    />
                </Wrapper>
                <Thumbnail source={{uri: icons[0]?.url}}/>
            </Container>
        </Card>
    );
}