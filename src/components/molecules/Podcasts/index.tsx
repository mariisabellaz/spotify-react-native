import React from 'react';
import { useTheme } from 'styled-components';

import { Container, Wrapper, InfoWrapper } from './styles';
import { Paragraph } from '@components/atoms/Typography/Paragraph';
import { Caption } from '@components/atoms/Typography/Caption';
import { Thumbnail } from '@components/atoms/Thumbnail';

import { IEpisodesItems } from '@interfaces/Episodes';
import { convertMsToTime, fomatDate } from '@utils/format';

type PodcastsProps = {
    episode: IEpisodesItems;
    onClick: () => void;
}

export function Podcasts({ episode, onClick } : PodcastsProps) {
    const { COLORS } = useTheme();
    const { name, images, description, duration_ms, release_date } = episode;

    return (
        <Container onPress={onClick} activeOpacity={1}>
            <Thumbnail 
                size={60} 
                source={images[0]?.url}
            />
            <Wrapper>
                <Paragraph 
                    label={name}
                    style={{ lineHeight: 24 }}
                    numberOfLines={1} 
                    ellipsizeMode="tail"
                    bold
                />
                <Paragraph 
                    label={description} 
                    numberOfLines={2} 
                    ellipsizeMode="tail"
                    color={COLORS.SUBTITLE}
                />
                <InfoWrapper>
                    <Caption 
                        label={`${fomatDate(release_date)}  •  ${convertMsToTime(duration_ms)}`} 
                        numberOfLines={1} 
                        ellipsizeMode="tail"
                        color={COLORS.SUBTITLE}
                    />
                </InfoWrapper>
            </Wrapper>
        </Container>
    );
}
