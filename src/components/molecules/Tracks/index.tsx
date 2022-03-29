import React from 'react';
import { useTheme } from 'styled-components';

import { Container, Wrapper } from './styles';
import { Paragraph } from '@components/atoms/Typography/Paragraph';
import { Caption } from '@components/atoms/Typography/Caption';

import { ITracksItems } from '@interfaces/Tracks';
import { convertMillis, fomatDate } from '@utils/format';

type TracksProps = {
    data: ITracksItems;
    onClick: () => void;
}

export function Tracks({ data, onClick } : TracksProps) {
    const { COLORS } = useTheme();
    const { track } = data;

    const getArtists = track.artists.map(item => {
        return item.name;
    });

    return (
        <Container onPress={onClick} activeOpacity={1}>
            <Wrapper>
                <Paragraph 
                    label={track?.name}
                    style={{ lineHeight: 24 }}
                    bold
                />
                <Caption label={convertMillis(track.duration_ms)} />
            </Wrapper>
            <Paragraph 
                label={`${getArtists.join(', ')}`} 
                numberOfLines={1} 
                ellipsizeMode="tail"
                color={COLORS.SUBTITLE}
            />
        </Container>
    );
}
