import React, { useState } from 'react';
import { useTheme } from 'styled-components';

import { Container, Wrapper, IconWrapper } from './styles';
import { Icon } from '@components/atoms/Icon';
import { PlayButton } from '@components/molecules/Buttons/PlayButton';
import { Pressable } from '@components/atoms/Pressable';

import Heart from '@assets/icons/heart.svg';
import HeartFill from '@assets/icons/heart_fill.svg';
import Save from '@assets/icons/save.svg';


export function IconsAlbum(){
    const { COLORS } = useTheme();
    const [like, setLike] = useState(false);

    return (
        <Container>
           <Wrapper>
                <Pressable onPress={() => setLike(!like)}>
                    { !like 
                        ? <Heart width={32} height={32}/> 
                        : <HeartFill width={32} height={32}/> 
                    }
                </Pressable>

                <Save width={28} height={28}/>
                
                <Icon name="ellipsis1" size={24} type="antDesign"/>
            </Wrapper>
            <PlayButton />
        </Container>
    );
}